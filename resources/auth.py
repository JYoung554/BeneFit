from models.db import db
from models.user import User
from middleware import genPassword, comparePassword, createToken, readToken, stripToken
from flask_restful import Resource
from flask import request

from sqlalchemy.orm import joinedload

class Register(Resource):
    def post(self):
        data = request.get_json()
        params = {
                  "username": data['username'],
                  "first_name":data['first_name'],
                  "email":data['email'],
                  "password_digest": genPassword(data['password_digest']),
                  "bio":data['bio'],
                  'avatar_url':data['avatar_url']
                  }
        user = User(**params)
        user.create()
        return user.json(), 201
    

class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.find_one(data['email'])
        if user and comparePassword(data['password_digest'], user.password_digest):
            payload = {
                "id": user.id,
                "email":user.email
            }
            token = createToken(payload)
            return{"payload": payload, "token": token}
        return {"msg: Unauthorized", 401}
    
    def get(self):
        token = stripToken(request)
        if token:
            payload = readToken(token)
            return payload
        return {"msg: Unauthorized", 401}
            
