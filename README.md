# Buy and Sell Pre-Owned Goods - FYP

# Backend Setup (Flask)

# Install Python & Virtual Environment
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows

# Install Flask and Dependencies
pip install -r requirements.txt


# Frontend Setup (React)

npx create-react-app frontend
cd frontend

npm install axios
npm install react-router-dom



# Set Proxy for API Requests Add the following to frontend/package.json

"proxy": "http://127.0.0.1:5000"


# Run the React App

npm start

