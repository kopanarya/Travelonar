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
          <div className="columns is-multiline">
            <Link className="news" to={`/news/${this.currentCity.name}`}>
              <div className="column is-one-third information news box">
                {this.currentCity.name}&apos;s News
              </div>
            </Link>
            
            <Link className="events" to={`/events/${this.currentCity.name}`}>
              <div className="column is-one-third information events box">
                {this.currentCity.name}`s Events
              </div>
            </Link>

            <div className="column is-one-third  informationlandmark box">{this.currentCity.name}`s Landmark</div>
            <div className="column is-one-third information restaurant box">{this.currentCity.name}`s Restaurant</div>
            <div className="column is-one-third information story box">{this.currentCity.name}`s Stories</div>
            <div className="column is-one-third information nightlife box">{this.currentCity.name}`s NightLife</div>
            <div className="column is-one-third information weather box">{this.currentCity.name}`s Weather</div>
          </div>
        </div>
      </section>
    )
  }
}
export default NavigationIndex
