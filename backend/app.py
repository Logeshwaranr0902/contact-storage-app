from flask import Flask
from flask_cors import CORS
from database import db
from routes import api

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contacts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)  # Enable CORS
db.init_app(app)

with app.app_context():
    db.create_all()  # Create database tables

app.register_blueprint(api, url_prefix='/api')  # Register API routes

if __name__ == '__main__':
    app.run(debug=True)
