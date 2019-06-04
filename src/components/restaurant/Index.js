import React from 'react'
import axios from 'axios'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'
import { Link } from 'react-router-dom'
import cities from '../../lib/cities'
import  Loader from '../common/Loader'


const Map = ReactMapboxGl({

  accessToken: process.env.MAP_BOX
})

class RestaurantIndex extends React.Component {

  constructor(props){
    super(props)

    this.state ={
      currentCity: cities.find(city => city.name === this.props.location.pathname.slice(13)),
      data: null,
      markerClick: false,
      selectedLocation: null


    }
    this.handleMarkerClick = this.handleMarkerClick.bind(this)

  }

  handleMarkerClick(e){

    this.setState({selectedLocation: e})
  }


  componentDidMount(){
    axios.get('/api/restaurants',{
      params: {
        location: String(this.state.currentCity.lat)+','+String(this.state.currentCity.lng)
      }
    })
      .then(res => this.setState({data: res.data}))
  }



  render() {
    if(!this.state.data) return <Loader />
    console.log(this.state, 'STATE')


    console.log(this.state.selectedLocation, 'merhaba ben state')


    return(
      <div>
        {    this.state.data.results.map(restaurant => <h1 key={restaurant.id}></h1>)}

        <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={[this.state.currentCity.lng, this.state.currentCity.lat]}
          zoom={[14]}
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}>

          {  this.state.data.results.map(restaurant =>
            <Marker key={restaurant.id}
              coordinates={[restaurant.geometry.location.lng, restaurant.geometry.location.lat]}
              anchor="bottom" onClick={e =>{
                e.preventDefault()
                this.handleMarkerClick(restaurant)
              }
              }>

              <button className="marker-btn" onClick={this.handleMarkerClick} >
                <img className="restaurant-marker"  src={'https://cdn2.iconfinder.com/data/icons/places-4/100/food_place_marker_location_restaurant_eat_fork_knife-512.png'}/>
              </button>
            </Marker>
          )}
          {this.state.selectedLocation &&
            <Popup   coordinates={[this.state.selectedLocation.geometry.location.lng, this.state.selectedLocation.geometry.location.lat]} >
              <div>
                <div>
                  <strong>{this.state.selectedLocation.name}</strong>
                </div>
                <div>
                  {this.state.selectedLocation.opening_hours.open_now && <span>Open</span>}
                  {!this.state.selectedLocation.opening_hours.open_now && <span>Closed</span>}
                </div>
                <div>
                  Rating: {this.state.selectedLocation.rating}
                </div>
                <div>
                  <Link  to={{
                    pathname: `/restaurants/show/${this.state.selectedLocation.name}`,
                    state: { selectedRestaurant: this.state.selectedLocation }
                  }}>
                    Details
                  </Link>
                </div>

              </div>
            </Popup>
          }


        </Map>
      </div>
    )
  }
}

export default RestaurantIndex
