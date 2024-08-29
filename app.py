from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api
from flask_cors import CORS
from resources.auth import Register, Login, GetProfile
import os
from models.db import db


app = Flask(__name__)
api = Api(app)
cors = CORS(app)

DATABASE_URL = os.getenv('DATABASE_URL')

if (DATABASE_URL):
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL.replace('://', 'ql://', 1)
    app.config['SQLALCHEMY_ECHO'] = False
    app.env = 'production'
else:
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ECHO'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/benefit_development'

db.init_app(app)

migrate = Migrate(app, db)

with app.app_context():
    db.create_all()


api.add_resource(Register, '/auth/register')
api.add_resource(Login, '/auth/login')
api.add_resource(GetProfile, 'auth/feed/:<user_id>')


if __name__ == "__main__":
    app.run(debug=True)