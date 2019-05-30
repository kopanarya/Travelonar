
import cities from '../../lib/cities'
import React from 'react'
// import cities from 'cities.json'
import Select from 'react-select'
import axios from 'axios'





const options = cities.map(city => {
  return {label: city.name, value: city.name , lat: city.lat, lng: city.lng}
})



class Home extends React.Component{
  constructor(){
    super()
    this.state ={

      selectedOption: null,
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log(cities)
    console.log(options)


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
      <section className='section'>
        <div className="container">
          <h1 className="title is-1 has-text-centered">Travelonar</h1>
          <form  onSubmit={this.handleSubmit}>
            <div className="field">
              <div className="control ">
                <Select
                  options={options}
                  value={selectedOption}
                  onChange={this.handleChange}
                />
                <div>
                  <button >Find it</button>
                </div>

              </div>
            </div>
          </form>
          <div className="columns is-multiline">
            <div className="column is one-third story box">
            Random City Story
            </div>
            <div className="column is one-third story box">
            Random City Story
            </div>
            <div className="column is one-third story box">
            Random City Story
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Home
