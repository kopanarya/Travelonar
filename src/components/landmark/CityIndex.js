import React from 'react'
import axios from 'axios'
import LandmarkCard from  './Card'
import cities from '../../lib/cities'
import NoResult from '../common/Noresult'


class CityLandmark extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: null
    }

  }
  componentDidMount(){

    axios.get('/api/landmarks/city', {
      params: {
        cityname: this.props.location.pathname.slice(11)
      }
    })
      .then(res => this.setState({data: res.data }))
  }
  render(){

    if(!this.state.data) return null

    return(
      <section className="section has-background-warning">
        <div className="container">
          {this.state.data.map(landmark =>
            <div key={landmark.id}>
              <LandmarkCard {...landmark} />
            </div>)
          }
          {this.state.data.length === 0 && <NoResult />}
        </div>
      </section>
    )
  }
}

export default CityLandmark
