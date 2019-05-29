
import cities from '../../lib/cities'
import React from 'react'
// import cities from 'cities.json'
import Select from 'react-select'





const options = cities.map(city => {
  return {label: city.name, value: city.name}
})



class Home extends React.Component{
  constructor(){
    super()
    this.state ={
      searchTerm: [],
      selectedOption: null
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSelectChange =this.handleSelectChange(this)
    console.log(cities)
    console.log(options)


  }
  handleChange(e){
    this.setState( { searchTerm: e.target.value } )
    console.log(this.state)
    console.log('me'+this.state)
  }

  handleSelectChange() {



  }

  render(){


    return(
      <section className='section'>
        <div className="container">
          <div className="field">
            <div className="control has-icons-left has-icons-right">

              <form>

                <Select
                  options={options}

                />
              </form>
              <button >Find it</button>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is one-third">
            Random City Story
            </div>
            <div className="column is one-third">
            Random City Story
            </div>
            <div className="column is one-third">
            Random City Story
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Home
