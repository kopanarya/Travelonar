from flask import Blueprint, request, jsonify, abort, g
from random import sample
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

@router.route('/stories/city', methods=['GET'])
@db_session
def citystory():
    schema = StorySchema(many=True)
    cityname = request.args.get('cityname')

    stories = Story.select(lambda l: l.cityname == cityname)
    return schema.dumps(stories)

@router.route('/stories/random', methods=['GET'])
@db_session
def random():
    schema = StorySchema(many=True)
    stories = schema.dump(Story.select()) # turns query object to list of dicts
    return jsonify(sample(stories, 3)) # chooses a random sample of those dicts

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

@router.route('/stories/randomstory/<int:story_id>', methods=['GET'])
@db_session
def show(story_id):
    # This will serialize our data
    schema = StorySchema()
    # This gets a bread by ID
    story = Story.get(id=story_id)

    # If we can't find a story, send a 404 response
    if not story:
        abort(404)

    # otherwise, send back the story data as JSON
    return schema.dumps(story)


@router.route('/stories/<int:story_id>', methods=['PUT'])
@db_session
@secure_route
def update(story_id):
    schema = StorySchema()
    story = Story.get(id=story_id)

    if not story:
        abort(404)

    try:
        data = schema.load(request.get_json())
        story.set(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(story)


@router.route('/stories/<int:story_id>', methods=['DELETE'])
@db_session
@secure_route
def delete(story_id):
    story = Story.get(id=story_id)

    if not story:
        abort(404)

    story.delete()
    db.commit()

    return '', 204
