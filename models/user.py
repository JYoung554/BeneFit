from models.db import db
from datetime import datetime

class User(db.Model):
    __tableName__ = "users"
    id = db.Column(db.Integer, primaryKey=True)
    username = db.Column(db.String(20), nullable=False)
    first_name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(20), nullable=False)
    password_digest = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.String(255), nullable=True)
    avatar_url = db.Column(db.String(255), nullable=True)
    date_created = db.Column(db.DateTime, default=datetime.now, nullable=False)


    def __init__(self, username, first_name, email, password_digest, bio, avatar_url):
        self.username = username
        self.first_name = first_name
        self.email = email
        self.password_digest = password_digest
        self.bio = bio
        self.avatar_url = avatar_url


    def json(self):
        return {"username": self.username, "first_name": self.first_name, "email": self.email, "password_digest": self.password_digest, "bio": self.bio, "avatarUrl":self.avatar_url}
    
    def create(self):
        db.add(self)
        db.session.commit()
        return self.json()
    
    
    @classmethod
    def find_by_PK(self, email):
        user = User.query.filter_by(email=email).first()
        return user