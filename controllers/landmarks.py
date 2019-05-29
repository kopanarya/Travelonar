from flask import Blueprint, request, jsonify, abort, g
from pony.orm import db_session
from marshmallow import ValidationError
from app import db
from models.Landmark import Landmark, LandmarkSchema

router = Blueprint(__name__, 'landmarks')

@router.route('/landmarks', methods=['GET'])
@db_session
def index():
    schema = LandmarkSchema(many=True)
    landmarks = Landmark.select()
    return schema.dumps(landmarks)
