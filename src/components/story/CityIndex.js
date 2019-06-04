import React from 'react'
import axios from 'axios'
import StoryCard from  './Card'
import cities from '../../lib/cities'
import NoResult from '../common/Noresult'


class CityStory extends React.Component{
  constructor(props){
    super(props)
    this.state = {

      data: null
    }

  }
  componentDidMount(){

    console.log(cities.find(city => city.name === this.props.match.params.cityname))
    axios.get('/api/stories/city', {
      params: {
        cityname: this.props.location.pathname.slice(9)
      }
    })
      .then(res => this.setState({data: res.data }))

  }
  render(){


    if(!this.state.data) return null
    return(
      <section className="section has-background-warning navigationpage">
        <div className="container">
          {this.state.data.map(story =>
            <div key={story.id}>
              <StoryCard {...story} />
            </div>
          )}
          {this.state.data.length === 0 && <NoResult />}
        </div>
      </section>

    )
  }
}
export default CityStory
