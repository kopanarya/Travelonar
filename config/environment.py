import os

secret = os.getenv('SECRET', 'ebPzjpUEnJ')
db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/travelonar-db')
