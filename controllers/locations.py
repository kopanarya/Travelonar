import os
import requests
from flask import Blueprint, Response, jsonify, request
from pony.orm import db_session

router = Blueprint('locations', __name__)

app_key = os.getenv('EVENTFUL_API')

@router.route('/locations', methods=['GET'])
@db_session
def index():

    location = request.args.get('location')
    params = {
        'keywords': 'music',
        'date': 'Future',
        'keyword': 'music',
        'app_key': app_key,
        'location': location
    }

    response = requests.get('http://api.eventful.com/json/events/search', params=params)

    return jsonify(response.json())
