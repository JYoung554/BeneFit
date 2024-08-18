from models.db import db
from datetime import datetime

class Plan(db.Model):
    __tablename__ = "plans"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    current_plan = db.Column(db.String(20), nullable=True)
    user_id = db.relationship('User', backref=db.backref("users_plans", lazy=True))
    date_created = db.Column(db.datetime(default=datetime.now, nullable=False))

    def __init__(self, title, description, current_plan):
        self.title = title
        self.description = description
        self.current_plan = current_plan

    def json(self):
        return {"title": self.title, "description": self.description, "current_plan": self.current_plan}
    
    def create(self):
        db.add(self)
        db.session.commit()
        return self.json()
    