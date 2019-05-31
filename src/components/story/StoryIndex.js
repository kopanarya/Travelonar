import React from 'react'
import axios from 'axios'
import StoryCard from  './StoryCard'


class StoryIndex extends React.Component{
  constructor(){
    super()
    this.state = {

      data: null
    }

  }
  componentDidMount(){
    axios.get('/api/stories')
      .then(res => this.setState({ data: res.data }))
  }
  render(){
    console.log(this.state.data)

    if(!this.state.data) return null
    return(
      <section className="section">
        <div className="container">
          {this.state.data.map(story =>
            <div key={story.id}>
              <StoryCard {...story} />
            </div>
          )
          }
        </div>
      </section>

    )
  }
}
export default StoryIndex
