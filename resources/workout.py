from models.workout import Workout
from flask import request
from flask_restful import Resource
from sqlalchemy.orm import joinedload


class Post(Resource):
    def post(self):
        data = request.get_json()
        workout = Workout(**data)
        workout.create()
        return workout.json(), 201
  
    def get(self):
        workout = Workout.find_all()
        return [data.json() for data in workout]
  
class SinglePost(Resource):
    def get(self, workout_id):
        workouts = Workout.query.options(joinedload("workouts")).filter_by(id=workout_id).first()
        workout = [w.json for w in workouts.w]
        return {**workout.json(), "Workouts": workout}