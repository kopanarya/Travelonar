from pony.orm import db_session
from app import db
from models.User import User, UserSchema
from models.Landmark import Landmark
from models.Story import Story

# We delete all tables in our database
db.drop_all_tables(with_all_data=True)
db.create_tables() # We create tables in our database


with db_session():
    schema = UserSchema()
    alikurtulus = User(
        username='alikurtulus',
        email='alikurtulus@hotmail.com',
        password_hash=schema.generate_hash('sda')
    )

    Story(
     cityname='Lisbon',
     title='Lisbon was great holiday',
     user=alikurtulus,
     description="Lisbon is, in my opinion, one of the best cities to spend a weekend and a perfect place to experience one of Europe’s smaller capitals – but don’t let the word ‘smaller’ fool you! Lisbon packs a hefty punch with great places to see, eat and places to totally ‘let your hair down’…",
     date='12.08.2018',
     image='https://handluggageonly.co.uk/wp-content/uploads/2015/09/DSC02292.jpg'
    )
    Story(
     cityname='Madrid',
     title='Madrid was dream holiday',
     user=alikurtulus,
     description="Madrid is often overshadowed by its northerly neighbor Barcelona. There seems little reason for this, though—with delicious food, affordable living, and deluxe shopping, the capital of Spain deserves its own spotlight of fame! Discover what many locals already know and love about their city—plentiful rooftop bars, nonstop nightclubs, fantastic museum exhibitions, and luscious green parks. Check out all of my tips in the ultimate ",
     date='22.08.2018',
     image='http://d3ipks40p8ekbx.cloudfront.net/dam/jcr:664bc411-039d-4b90-9269-68deba1c2004/20170127_blog_MCT_Plaza%20Mayor-min.jpg'
    )
    Story(
     cityname='Barcelona',
     title='Barcelona was gaudi`s paradise.',
     user=alikurtulus,
     description="Barcelona is one of the most popular destinations in Europe. It’s a city that I’ve been to many times.Once a major city in the Roman Empire, the city still places an important role in the region and is home to millions of residents and visitors enjoying all the delicious sangria and gin, mouthwatering food, stunning beaches, warm weather, the rich history and culture, and unique architecture that Barcelona is famous for.",
     date='22.08.2018',
     image='https://media.nomadicmatt.com/2018/barcelona_itinerary3.jpg'
    )
    Landmark(
    name='La Sagrada Familia',
    description='The Temple Expiatori de la Sagrada Família is a large unfinished Roman Catholic church in Barcelona. Designed by Catalan architect Antoni Gaudí, his work on the building is part of a UNESCO World Heritage Site. In November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica',
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfEzwPC1ZYGOu_xu-3qgDmSaieP7thuUi53fqHI3cfh7qiRD305g',
    ticket_price=32,
    lat=41.4044837,
    lng=2.1757278,
    start_time='09:00',
    finish_time='20:00',
    address='Carrer de Mallorca, 401, 08013 Barcelona, Spain',
    cityname='Barcelona',
    user=alikurtulus
    )
    Landmark(
    name='Torre de Belém',
    description='Built on the northern bank of the Tagus between 1514 and 1520 as part of the Tagus estuary defence system, the Tower of Belém is one of the architectural jewels of the reign of Manuel I.In the tower as a whole one can distinguish two distinct volumes and military architectural models: the mediaeval keep tower and the modern bulwark which, as it contained two artillery levels, allowed for long-distance cannon firing as well as ricochet shots over the water.The Tower of Belém is a cultural reference, a symbol of the specificity of Portugal at the time, including its privileged exchange with other cultures and civilisations. As a protector of Portuguese individuality and universality, the tower saw its role confirmed in 1983 when it was classified by UNESCO as "Cultural Heritage of Humanity".',
    image='https://www.planetware.com/photos-large/P/belem-tower.jpg',
    ticket_price=12,
    lat=38.6966811,
    lng=-9.2147419,
    start_time='10:00',
    finish_time='17.30',
    address='Av. Brasília, 1400-038 Lisboa, Portugal',
    cityname='Lisbon',
    user=alikurtulus
    )
    Landmark(
    name='Plaza Mayor',
    description="The Plaza Mayor (English: Main Square) is a major public space in the heart of Madrid, the capital of Spain. It was once the centre of Old Madrid,[1]. It was first built (1580–1619) during the Habsburg period of Philip III's reign. Only a few Spanish blocks away is another famous plaza, the Puerta del Sol. The Plaza Mayor is for the people of Madrid and tourists to shop, walk around, eat, and enjoy the outdoors.",
    image='http://www.mad4madrid.com/wp-content/uploads/2016/03/shutterstock_93231802.jpg',
    ticket_price=0,
    lat=40.4149011,
    lng=-3.7063166,
    start_time='10:30',
    finish_time='2:30',
    address='Plaza Mayor, 28012 Madrid, Spain',
    cityname='Madrid',
    user=alikurtulus
    )
