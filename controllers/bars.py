import os
import requests
from flask import Blueprint, Response, jsonify, request
from pony.orm import db_session

router = Blueprint('bars', __name__)
apiKey = os.getenv('GOOGLE_API')

@router.route('/bars', methods=['GET'])
@db_session
def index():

    location = request.args.get('location')

    params = {
        'location': location,
        'type': 'night_club',
        'key': apiKey,
        'radius':'2000',
        'language':'en'
    }

    response = requests.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', params=params)
    return jsonify(response.json())

@router.route('/bars/show', methods=['GET'])
@db_session
def show():

    placeid = request.args.get('placeid')

    params = {
        'placeid': placeid,
        'key': apiKey,


    }
    response = requests.get('https://maps.googleapis.com/maps/api/place/details/json', params=params)
    return jsonify(response.json())
