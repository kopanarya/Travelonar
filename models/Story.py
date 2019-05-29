from app import db
from pony.orm import Required, Set
from marshmallow import Schema, fields

class Story(db.Entity):
    cityname = Required(str)
    title = Required(str)
    user = Required('User')
    description = Required(str)
    date = Required(str)
    image = Required(str)

class StorySchema(Schema):
    id = fields.Int(dump_only=True)
    cityname = fields.Str(required=True)
    title = fields.Str(required=True)
    description = fields.Str(required=True)
    date = fields.Str(str)
    user = fields.Nested('UserSchema', exclude=('email', 'stories'))
    image = fields.Str(str)
