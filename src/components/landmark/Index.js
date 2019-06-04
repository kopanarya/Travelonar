import React from 'react'
import axios from 'axios'
import LandmarkCard from  './Card'

class Index extends React.Component{
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
    if(!this.state.data) return null
    return(
      <section className="section has-background-warning">
        <div className="container">
          {this.state.data.map(landmark =>
            <div key={landmark.id}>
              <LandmarkCard {...landmark} />
            </div>)}
        </div>
      </section>)
  }
}
export default Index
