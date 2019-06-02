from flask import Blueprint, request, jsonify, abort, g
from pony.orm import db_session
from marshmallow import ValidationError
from app import db
from models.Story import Story, StorySchema
from lib.secure_route import secure_route

router = Blueprint(__name__, 'stories')

@router.route('/stories', methods=['GET'])
@db_session
def index():
    schema = StorySchema(many=True)
    stories = Story.select()
    return schema.dumps(stories)

@router.route('/stories', methods=['POST'])
@db_session
@secure_route
def create():
    # This will deserialize the JSON from insomnia
    schema = StorySchema()

    try:
        # attempt to convert the JSON into a dict
        data = schema.load(request.get_json())
        # Use that to create a story object
        data['user'] = g.current_user
        story = Story(**data)
        # store it in the database
        db.commit()
    except ValidationError as err:
        # if the validation fails, send back a 422 response
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    # otherwise, send back the story data as JSON
    return schema.dumps(story), 201
