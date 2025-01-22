from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Home route - renders home.html
@app.route('/')
def home():
    return render_template('home.html')

# About route - renders about.html
@app.route('/about')
def about():
    return render_template('about.html')

# Contact Us route - renders contact_us.html
@app.route('/contact-us')
def contact_us():
    return render_template('contact_us.html')

if __name__ == '__main__':
    app.run(debug=True)
