import React from 'react'
import { Link } from 'react-router-dom'
import qs from 'query-string'
import cities from '../../lib/cities'

class NavigationIndex extends React.Component{
  constructor(props){
    super(props)

    const currentCity = qs.parse(this.props.location.search).city
    this.currentCity = cities.find(city => city.name === currentCity)
  }

  componentDidMount() {
    console.log(this.currentCity)
  }

  render(){

    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline random-stories">
            <Link className="column is-one-third city-information  has-text-light news box" to={`/news/${this.currentCity.name}`}>
              <div>
                {this.currentCity.name}&apos;s News
              </div>
            </Link>

            <Link className="column is-one-third city-information has-text-light events box" to={`/events/${this.currentCity.name}`}>
              <div >
                {this.currentCity.name}&apos;s Events
              </div>
            </Link>

            <div className="column is-one-third city-information  has-text-light landmark box">{this.currentCity.name}&apos;s Landmark</div>
            <div className="column is-one-third city-information  has-text-light restaurant box">{this.currentCity.name}&apos;s Restaurant</div>
            <div className="column is-one-third city-information  has-text-light story box">{this.currentCity.name}&apos;s Stories</div>
            <div className="column is-one-third city-information  has-text-light nightlife box">{this.currentCity.name}&apos;s NightLife</div>
            <div className="column is-one-third city-information  has-text-light weather box">{this.currentCity.name}&apos;s Weather</div>
          </div>
        </div>
      </section>
    )
  }
}
export default NavigationIndex
