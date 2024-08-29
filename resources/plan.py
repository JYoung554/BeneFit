from models.db import db
from models.plan import Plan
from flask import request
from flask_restful import Resource
from sqlalchemy.orm import joinedload

class Plans(Resource):
    def post(self):
        data = request.get_json()
        plan = Plan(**data)
        plan.create()
        return plan.json(), 201


    def get(self):
        plans = Plan.find_all()
        return [data.json() for data in plans]


class SinglePlans(Resource):
    def get(self, plan_id):
        plan = Plan.query.options(joinedload("workouts")).filter_by(id=plan_id).first()
        workout = [w.json() for w in plan.workout]
        return {**plan.json(), "workouts":workout}
