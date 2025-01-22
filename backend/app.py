from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for communication with React

# Example route
@app.route('/api/items', methods=['GET'])
def get_items():
    return jsonify({"items": ["Laptop", "Phone", "Furniture"]})

if __name__ == '__main__':
    app.run(debug=True)
