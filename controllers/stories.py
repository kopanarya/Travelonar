from flask import Blueprint, request, jsonify, abort, g
from pony.orm import db_session
from marshmallow import ValidationError
from app import db
from models.Story import Story, StorySchema

router = Blueprint(__name__, 'stories')

@router.route('/stories', methods=['GET'])
@db_session
def index():
    schema = StorySchema(many=True)
    stories = Story.select()
    return schema.dumps(stories)
