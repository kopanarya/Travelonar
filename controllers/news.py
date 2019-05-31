import os
import requests
from flask import Blueprint, Response, jsonify, request
from pony.orm import db_session

router = Blueprint('news', __name__)
apiKey = os.getenv('NEWS_API')

@router.route('/news', methods=['GET'])
@db_session
def index():

    q = request.args.get('q')
    params = {
        'q': q,
        'language': 'en',
        'apiKey': apiKey
    }

    response = requests.get('https://newsapi.org/v2/everything', params=params)
    return jsonify(response.json())
