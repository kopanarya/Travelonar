from app import db
from pony.orm import Required, Set, Optional
from marshmallow import Schema, fields

class Landmark(db.Entity):
    name = Required(str)
    description = Required(str)
    image = Required(str)
    ticket_price = Optional(float)
    opening_hours = Required(str)
    address = Required(str)
    cityname = Required(str)
    user = Required('User')

class LandmarkSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    description = fields.Str(required=True)
    image = fields.Str(required=True)
    ticket_price = fields.Float()
    opening_hours = fields.Str(required=True)
    address = fields.Str(required=True)
    cityname = fields.Str(required=True)
