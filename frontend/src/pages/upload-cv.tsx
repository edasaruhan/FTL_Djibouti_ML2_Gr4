import { useState } from "react";

export default function UploadCV() {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    poste: "",
    specialite: "",
    experience: "",
    domaines: "",
    langues: "",
    remarques: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.name === "cv") setFile(e.target.files[0]);
      if (e.target.name === "image") setImage(e.target.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Veuillez sélectionner un fichier CV.");
      return;
    }

    const data = new FormData();
    data.append("cv", file);
    if (image) data.append("image", image);
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        alert("Profil idéal soumis avec succès !");
        setFile(null);
        setImage(null);
        setFormData({
          poste: "",
          specialite: "",
          experience: "",
          domaines: "",
          langues: "",
          remarques: "",
        });
      } else {
        alert("Erreur lors de l’envoi.");
      }
    } catch (error) {
      alert("Erreur réseau.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-center mb-6">🧩 Définir le profil de CV idéal</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {file && (
            <p className="text-sm text-gray-700">📄 Fichier sélectionné : <strong>{file.name}</strong></p>
          )}

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500"
          />

          <input
            type="text"
            name="poste"
            placeholder="Poste recherché (ex: Développeur Frontend)"
            value={formData.poste}
            onChange={handleInputChange}
            className="w-full p-3 rounded-xl border border-gray-300"
          />

          <input
            type="text"
            name="specialite"
            placeholder="Spécialité (ex: React, Django, etc.)"
            value={formData.specialite}
            onChange={handleInputChange}
            className="w-full p-3 rounded-xl border border-gray-300"
          />

          <input
            type="text"
            name="experience"
            placeholder="Expérience minimum (ex: 3 ans)"
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full p-3 rounded-xl border border-gray-300"
          />

          <input
            type="text"
            name="domaines"
            placeholder="Domaines d'activité (ex: Finance, Éducation)"
            value={formData.domaines}
            onChange={handleInputChange}
            className="w-full p-3 rounded-xl border border-gray-300"
          />

          <input
            type="text"
            name="langues"
            placeholder="Langues requises (ex: Français, Anglais)"
            value={formData.langues}
            onChange={handleInputChange}
            className="w-full p-3 rounded-xl border border-gray-300"
          />

          <textarea
            name="remarques"
            placeholder="Remarques supplémentaires"
            value={formData.remarques}
            onChange={handleInputChange}
            className="w-full p-3 rounded-xl border border-gray-300"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition"
          >
            ✅ Soumettre le profil idéal
          </button>
        </form>
      </div>
    </div>
  );
}
