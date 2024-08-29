from models.db import db
from datetime import datetime

class Workout(db.Model):
    __tablename__ = "workouts"
    id = db.Column(db.Integer, primary_key=True)
    muscle_group = db.Column(db.String(50), nullable=True)
    date_created = db.Column(db.datetime(default=datetime.now), nullable=False)
    plans = db.relationship("Plan", backref=db.backref("plan_workouts"), lazy=True)

    
    def __init__(self, muscle_group):
        self.muscle_group = muscle_group


    def json(self):
        return {'muscle_group': self.muscle_group}
    
    def create(self):
        db.add(self)
        db.session.commit()
        return self.json()
        