import { GoogleComponent } from 'react-google-location'
import React from 'react'
class HomeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({ place: e })
  }
  render() {
    console.log(this.state.place)
    return (
      <section className="section has-background-warning">
        <div className="container">
          <div className="columns multiline box">
            <div className="column is-one-half">
              <GoogleComponent
                apiKey='AIzaSyAb2-RLRju8CgjGPXnPGX5D_LG7YoL2lEQ'
                language={'en'}
                className="input"
                coordinates={true}
                onChange={this.handleChange} />
            </div>
            <div className="column is-one-half">

            </div>


          </div>
        </div>
      </section>

    )
  }
}


export default HomeComponent
