from flask import Blueprint, request, jsonify, abort, g
from pony.orm import db_session
from marshmallow import ValidationError
from app import db
from models.Landmark import Landmark, LandmarkSchema
from lib.secure_route import secure_route

router = Blueprint(__name__, 'landmarks')

@router.route('/landmarks', methods=['GET'])
@db_session
def index():
    schema = LandmarkSchema(many=True)
    landmarks = Landmark.select()
    return schema.dumps(landmarks)


@router.route('/landmarks/city', methods=['GET'])
@db_session
def citylandmark():
    schema = LandmarkSchema(many=True)
    cityname = request.args.get('cityname')

    landmarks = Landmark.select(lambda l: l.cityname == cityname)
    return schema.dumps(landmarks)



@router.route('/landmarks', methods=['POST'])
@db_session
@secure_route
def create():
    # This will deserialize the JSON from insomnia
    schema = LandmarkSchema()

    try:
        # attempt to convert the JSON into a dict
        data = schema.load(request.get_json())
        # Use that to create a story object
        data['user'] = g.current_user
        landmark = Landmark(**data)
        # store it in the database
        db.commit()
    except ValidationError as err:
        # if the validation fails, send back a 422 response
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    # otherwise, send back the story data as JSON
    return schema.dumps(landmark), 201


@router.route('/landmarks/<int:landmark_id>', methods=['PUT'])
@db_session
@secure_route
def update(landmark_id):
    schema = LandmarkSchema()
    landmark = Landmark.get(id=landmark_id)

    if not landmark:
        abort(404)

    try:
        data = schema.load(request.get_json())
        landmark.set(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(landmark)


@router.route('/landmarks/<int:landmark_id>', methods=['DELETE'])
@db_session
@secure_route
def delete(landmark_id):
    landmark = Landmark.get(id=landmark_id)

    if not landmark:
        abort(404)

    landmark.delete()
    db.commit()

    return '', 204
