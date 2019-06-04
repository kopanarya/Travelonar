import cities from '../../lib/cities'
import React from 'react'
import images from './Images'
import Select from 'react-select'
import axios from 'axios'
import { Link } from 'react-router-dom'

const options = cities.map(city => {
  return {label: city.name, value: city.name , lat: city.lat, lng: city.lng}
})


class Home extends React.Component{
  constructor(){
    super()
    this.state ={
      currentImg: 0,
      images: images,
      selectedOption: null,
      error: '',
      randomStories: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log(cities)
    console.log(options)
  }

  componentDidMount() {

    setInterval(() => {
      let currentImg = this.state.currentImg + 1
      currentImg === this.state.images.length ? currentImg = 0:null
      this.setState({ currentImg })
    }, 4000)

    axios.get('/api/stories/random')
      .then(res => this.setState({ randomStories: res.data }))

  }

  handleChange(selectedOption){
    this.setState( { selectedOption: selectedOption} )
    console.log(selectedOption.value+'meeee')
  }
  handleSubmit(){
    this.props.history.push(`/navigation?city=${this.state.selectedOption.value}`)
  }

  render(){
    
    if(!this.state.randomStories) return null
    console.log(this.state, 'state')
    console.log(this.state.randomStories, 'RANDOMSTORIES')
    const { selectedOption } = this.state
    console.log(selectedOption+'in render')
    return(
      <section className="section " id="background-change" style={{
        backgroundImage: `url(${images[this.state.currentImg]})`
      }}>
        <div className="container">
          <div  className="search-bar">
            <h1 className="title is-1 has-text-left"><span className="main-name" >Travelonar</span></h1>
            <form  onSubmit={this.handleSubmit}>
              <div className="field">
                <div className="control box searchbar-inputs ">
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={this.handleChange}
                  />
                  <div className="button-home-text">
                    <button className="button is-primary ">Find it</button>
                    <h3 className="home-text">Find the right city to go on holiday!!!!</h3>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="columns is-multiline random-stories ">
            {this.state.randomStories &&
            <Link className="column is-one-third-mobile is-one-third-tablet  is-one-third random-story  box is-3 has-text-light" to={{
              pathname: `/stories/randomstory/${this.state.randomStories[0].id}`,
              state: { randomStory: this.state.randomStories[0] }
            }}>
              <div >
              Random City Story
              </div>
            </Link>}
            {this.state.randomStories &&
              <Link className="column is-one-third-mobile is-one-third-tablet is-one-third random-story  box is-3 has-text-light" to={{
                pathname: `/stories/randomstory/${this.state.randomStories[1].id}`,
                state: { randomStory: this.state.randomStories[1] }
              }}>
                <div >
                Random City Story
                </div>
              </Link>
            }
            {this.state.randomStories &&  <Link className="column is-one-third-mobile is-one-third-tablet is-one-third random-story  box is-3 has-text-light" to={{
              pathname: `/stories/randomstory/${this.state.randomStories[2].id}`,
              state: { randomStory: this.state.randomStories[2] }
            }}>
              <div >
                 Random City Story
              </div>
            </Link>  }


          </div>
        </div>
      </section>
    )
  }
}

export default Home
