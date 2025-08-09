// routes/cv.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../lib/db');
const authMiddleware = require('../middleware/auth');
const { Configuration, OpenAIApi } = require('openai');

const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // ex: userId-timestamp-originalname.pdf
    cb(null, `${req.userId}-${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST upload CV
router.post('/upload', authMiddleware, upload.single('cv'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'File required' });

  try {
    const { filename, path: filepath } = req.file;
    const result = await db.query(
      `INSERT INTO cvs (user_id, filename, filepath) VALUES ($1, $2, $3) RETURNING id, filename, filepath, created_at`,
      [req.userId, filename, filepath]
    );
    res.json({ message: 'Upload successful', cv: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// GET list CVs for user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await db.query('SELECT id, filename, score, created_at FROM cvs WHERE user_id = $1 ORDER BY created_at DESC', [req.userId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// POST analyze CV with OpenAI (by cv id)
router.post('/analyze/:id', authMiddleware, async (req, res) => {
  const cvId = req.params.id;

  try {
    // Get CV file path
    const cvRes = await db.query('SELECT * FROM cvs WHERE id = $1 AND user_id = $2', [cvId, req.userId]);
    if (cvRes.rows.length === 0) return res.status(404).json({ error: 'CV not found' });
    const cv = cvRes.rows[0];

    // Extract text from PDF (simple placeholder)
    // Tu peux ajouter ici une vraie extraction avec pdf-parse, mammoth, etc.
    // Pour l’exemple, on simule un texte extrait
    const extractedText = 'Exemple de texte extrait du CV.';

    // Appel OpenAI
    if (!process.env.OPENAI_API_KEY) {
      return res.status(400).json({ error: 'OPENAI_API_KEY missing' });
    }

    const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
    const openai = new OpenAIApi(configuration);

    const prompt = `Analyse ce CV et donne un score sur 100 pour compétence, expérience et adéquation au poste. Texte :\n${extractedText}`;

    const completion = await openai.createChatCompletion({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
    });

    const aiResponse = completion.data.choices[0].message.content;
    // Exemple de parsing basique JSON dans la réponse, à adapter selon ta prompt engineering
    // Supposons que la réponse contient un JSON : {"competence": 80, "experience": 70, "adéquation": 75}
    let score;
    try {
      score = JSON.parse(aiResponse);
    } catch {
      score = { raw: aiResponse };
    }

    // Update DB
    await db.query('UPDATE cvs SET score = $1 WHERE id = $2', [score, cvId]);

    res.json({ score, rawResponse: aiResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Analyse error' });
  }
});

module.exports = router;
