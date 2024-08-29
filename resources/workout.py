from models.workout import Workout
from flask import request
from flask_restful import Resource
from sqlalchemy.orm import joinedload


class Workout(Resource):
    def post(self):
        data = request.get_json()
        workout = Workout(**data)
        workout.create()
        return workout.json(), 201


    def get(self):
        workout = Workout.find_all()
        return [data.json() for data in workout]


class SingleWorkout(Resource):
    def get(self, plan_id):
        workout = Workout.query.options(joinedload("plans")).filter_by(id=plan_id).first()
        plan = [p.json for p in workout.plan]
        return {**workout.json(), "plans": plan}
    