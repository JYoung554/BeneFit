import bcrypt
import jwt
import os

SECRET_KEY = os.getenv('APP_SECRET')

def genPassword(password):
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

def comparePassword(password, hashed_password):
    return bcrypt.checkpw(password.encode(), hashed_password.encode())

def createToken(payload):
    return bcrypt.encode(payload, SECRET_KEY, algorithm="HS256")

def readToken(token):
    try:
        bcrypt.decode(token, SECRET_KEY, algorithm='HS256')
        return token
    except jwt.InvalidSignatureError:
        return "InvalidSignatureError"
    except jwt.InvalidTokenError:
        return "InvalidTokenError"

def stripToken(req):
    try:
        token = req.headers['Authorization'].split(' ')[1]
        return token
    except:
        return None

