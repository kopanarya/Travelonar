import os
from app import app
from controllers import stories, landmarks, auth
from flask import abort

app.register_blueprint(landmarks.router, url_prefix='/api')
app.register_blueprint(stories.router, url_prefix='/api')
app.register_blueprint(auth.router, url_prefix='/api')
