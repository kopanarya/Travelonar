import React from 'react'
import axios from 'axios'
import LandmarkCard from  './LandmarkCard'


class LandmarksIndex extends React.Component{
  constructor(){
    super()
    this.state = {

      data: null
    }

  }
  componentDidMount(){
    axios.get('/api/landmarks')
      .then(res => this.setState({ data: res.data }))
  }
  render(){
    console.log(this.state.data)

    if(!this.state.data) return null
    return(
      <section className="section">
        <div className="container">
          {this.state.data.map(landmark =>
            <div key={landmark.id}>
              <LandmarkCard {...landmark} />
            </div>
          )
          }
        </div>
      </section>

    )
  }
}
export default LandmarksIndex
