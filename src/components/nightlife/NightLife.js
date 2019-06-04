import React from 'react'
import axios from 'axios'
import ReactMapboxGl, { Marker,Popup } from 'react-mapbox-gl'
import { Link } from 'react-router-dom'
import cities from '../../lib/cities'
import  Loader from '../common/Loader'

const Map = ReactMapboxGl({
  accessToken: process.env.MAP_BOX
})

class NightLife extends React.Component {

  constructor(props){
    super(props)

    this.state ={
      currentCity: cities.find(city => city.name === this.props.location.pathname.slice(6)),
      data: null,
      selectedLocation: null
    }
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
  }
  handleMarkerClick(e){

    this.setState({selectedLocation: e})
  }
  componentDidMount(){

    axios.get('/api/bars',{
      params: {
        location: String(this.state.currentCity.lat)+','+String(this.state.currentCity.lng)
      }
    })
      .then(res => this.setState({data: res.data}))
  }
  render() {
    if(!this.state.data) return  <Loader />
    console.log(this.state, 'STATE')

    return(
      <div>
        {    this.state.data.results.map(bar => <h1 key={bar.id}></h1>)}

        <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={[this.state.currentCity.lng, this.state.currentCity.lat]}
          zoom={[14]}
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}>

          {  this.state.data.results.map(bar =>
            <Marker key={bar.id}
              coordinates={[bar.geometry.location.lng, bar.geometry.location.lat]}
              anchor="bottom"
              onClick={e =>{
                e.preventDefault()
                this.handleMarkerClick(bar)
              }
              }  >
              <button className="marker-btn" onClick={this.handleMarkerClick} >
                <img className="restaurant-marker"  src={'https://cdn2.iconfinder.com/data/icons/places-4/100/drink_place_marker_location_bar_coctail_party-512.png'}/>
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
                  {!this.state.selectedLocation.opening_hours.open_now&& <span>Closed</span>}
                </div>
                <div>
                  Rating: {this.state.selectedLocation.rating}
                </div>
                <div>
                  <Link  to={{
                    pathname: `/bars/show/${this.state.selectedLocation.name}`,
                    state: { selectedBar: this.state.selectedLocation }
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

export default NightLife
