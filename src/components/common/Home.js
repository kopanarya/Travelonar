import cities from '../../lib/cities'
import React from 'react'
import images from './Images'
import Select from 'react-select'

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
      error: ''
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
  }
  handleChange(selectedOption){
    this.setState( { selectedOption: selectedOption} )
    console.log(selectedOption.value+'meeee')
  }
  handleSubmit(){
    this.props.history.push(`/navigationIndex?city=${this.state.selectedOption.value}`)
  }

  render(){

    const { selectedOption } = this.state
    console.log(selectedOption+'in render')
    return(
      <section className="section " id="background-change" style={{
        backgroundImage: `url(${images[this.state.currentImg]})`
      }}>
        <div className="container">
          <div  className="search-bar">
            <h1 className="title is-1 has-text-centered"><span className="main-name" >Travelonar</span></h1>
            <form  onSubmit={this.handleSubmit}>
              <div className="field">
                <div className="control box ">
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={this.handleChange}
                  />
                  <div>
                    <button className="searchbar-button">Find it</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="columns is-multiline random-stories ">
            <div className="column is-one-third random-story  box is-3 has-text-light">
            Random City Story
            </div>
            <div className="column is-one-third random-story  box is-3 has-text-light">
            Random City Story
            </div>
            <div className="column is-one-third random-story  box is-3 has-text-light">
            Random City Story
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Home
