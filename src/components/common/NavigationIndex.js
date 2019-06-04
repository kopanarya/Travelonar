import React from 'react'
import { Link } from 'react-router-dom'
import qs from 'query-string'
import cities from '../../lib/cities'


class NavigationIndex extends React.Component{
  constructor(props){
    super(props)

    const currentCity = qs.parse(this.props.location.search).city
    this.currentCity = cities.find(city => city.name === currentCity)
    this.state ={
      selectedCity: null
    }
  }

  componentDidMount() {
    console.log(this.currentCity)
  }

  render(){

    return(
      <section className="section short-section background-color">
        <div className="container">
          <h1 className="ttitle is-1 main-name has-text-left ">{this.currentCity.name}
            <hr className="city-name" />
          </h1>
          <div className="columns is-multiline random-stories ">
            <Link className="column is-full-mobile is-one-third city-information  has-text-light news box " to={`/news/${this.currentCity.name}`}>
              <div>
               News

              </div>
            </Link>

            <Link className="column is-full-mobile is-one-third city-information has-text-light events box" to={`/events/${this.currentCity.name}`}>
              <div >
                Events
              </div>
            </Link>
            <Link className="column is-full-mobile is-one-third city-information  has-text-light landmark box" to={{
              pathname: `/landmarks/${this.currentCity.name}`
            }} >
              <div >Landmarks</div>
            </Link>
            <Link className="column is-full-mobile is-one-third city-information  has-text-light restaurant box" to={{
              pathname: `/restaurants/${this.currentCity.name}`

            }}>
              <div >Restaurants</div>
            </Link>
            <Link className="column is-full-mobile is-one-third city-information  has-text-light story box" to={{
              pathname: `/stories/${this.currentCity.name}`
            }}>
              <div >Stories</div>
            </Link>
            <Link className="column is-full-mobile is-one-third city-information  has-text-light nightlife box" to={{
              pathname: `/bars/${this.currentCity.name}`
            }}>
              <div > NightLife</div>
            </Link>

          </div>
        </div>
      </section>
    )
  }
}
export default NavigationIndex
