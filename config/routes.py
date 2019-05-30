import os
from app import app
from controllers import stories, landmarks, auth, locations, news
from flask import abort

app.register_blueprint(landmarks.router, url_prefix='/api')
app.register_blueprint(stories.router, url_prefix='/api')
app.register_blueprint(auth.router, url_prefix='/api')
app.register_blueprint(locations.router, url_prefix='/api')
app.register_blueprint(news.router, url_prefix='/api')

@app.route('/')
@app.route('/<path:path>')
def catch_all(path='index.html'):
    if os.path.isfile('public/' + path):
        return app.send_static_file(path)

    return abort(404)
