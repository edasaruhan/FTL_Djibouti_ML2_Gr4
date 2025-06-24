import os
from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# Charger les données CSV
df = pd.read_csv('cv_unifie.csv')

# Route principale : retourner toutes les données
@app.route('/', methods=['GET'])
def get_data():
    return jsonify(df.to_dict(orient='records'))

# Route par ID
@app.route('/<int:item_id>', methods=['GET'])
def get_item(item_id):
    item = df[df['id'] == item_id]
    if not item.empty:
        return jsonify(item.to_dict(orient='records')[0])
    return jsonify({'error': 'Item non trouvé'}), 404

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
