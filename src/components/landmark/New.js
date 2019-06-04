import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Auth from '../../lib/Auth'
import axios from 'axios'
import Select from 'react-select'
import cities from '../../lib/cities'

const options = cities.map(city => {
  return {label: city.name, value: 'cityname' , lat: city.lat, lng: city.lng}
})



class New extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
      },
      errors: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleStartTime = this.handleStartTime.bind(this)
    this.handleFinishTime = this.handleFinishTime.bind(this)
  }


  handleChange(e){
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    console.log(data)
    this.setState({ data })
  }

  handleSelect(e){
    const data = { ...this.state.data, [e.value]: e.label }
    this.setState({ data })
  }

  handleStartTime(date) {
    console.log(date)

    this.setState({
      data: {
        ...this.state.data,
        start_time: date.toLocaleTimeString()
      }
    })
  }

  handleFinishTime(date) {
    console.log(date)

    this.setState({
      data: {
        ...this.state.data,
        finish_time: date.toLocaleTimeString()
      }
    })
  }
  handleSubmit(e){
    e.preventDefault()
    console.log(this.state.data.errors,'hi there')

    const token = Auth.getToken()
    axios.post('/api/landmarks', this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/landmarks'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
      // .catch(err => console.error(err.response.data))
    console.log(this.state.errors)
  }
  render() {
    if(!this.state.data) return null
    console.log(this.state.data.cityname)
    return (
      <section className="section has-background-warning">
        <div className="container ">
          <form onSubmit={this.handleSubmit}>
            <div className="columns  is-centered ">
              <div className="column box is-half-desktop is-half-tablet">
                <div className="field">
                  <label className="label">Landmark</label>
                  <div className="control">
                    <input
                      className="input"
                      name="name"
                      placeholder="The name of landmark!"
                      onChange={this.handleChange}
                      value={this.state.data.name || ''}
                    />

                  </div>
                  {this.state.errors && this.state.errors.name && <div className="help is-danger">Please enter a landmark name</div>}
                </div>

                <div className="field">
                  <label className="label">City Name</label>
                  <div className="control">
                    <Select
                      options={options}
                      onChange={this.handleSelect}
                    />

                  </div>
                  {this.state.errors && this.state.errors.cityname && <div className="help is-danger">Please enter a city name</div>}
                </div>
                <div className="field">
                  <label className="label">Ticket Price</label>
                  <div className="control">
                    <input
                      className="input"
                      name="ticket_price"
                      type="number"
                      placeholder="ticket price :12£!"
                      onChange={this.handleChange}
                      value={this.state.data.ticket_price || ''}
                    />
                  </div>
                  {this.state.errors && this.state.errors.ticket_price && <div className="help is-danger">Please enter a ticket price</div>}
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="description"
                      placeholder="The description of your story!"
                      onChange={this.handleChange}
                      value={this.state.data.description || ''}
                    >
                    </textarea>
                  </div>
                  {this.state.errors && this.state.errors.description && <div className="help is-danger">Please enter a description</div>}
                </div>
                <div className="field">
                  <label className="label">Address</label>
                  <div className="control">
                    <input
                      className="input"
                      name="address"
                      placeholder="The address of the landmark !"
                      onChange={this.handleChange}
                      value={this.state.data.address || ''}
                    />
                  </div>
                  {this.state.errors && this.state.errors.address && <div className="help is-danger">Please enter a address</div>}
                </div>
                <div className="field">
                  <label className="label">Image Url</label>
                  <div className="control">
                    <input
                      className="input"
                      name="image"
                      placeholder="The image of your story!"
                      onChange={this.handleChange}
                      value={this.state.data.image || ''}
                    />
                  </div>
                  {this.state.errors && this.state.errors.image && <div className="help is-danger">Please enter a image url</div>}
                </div>
                <div className="field">
                  <label className="label">Start Time</label>
                  {this.state.data.start_time &&  <h1>{this.state.data.start_time || ''}</h1>}
                  <DatePicker
                    showTimeSelect
                    showTimeSelectOnly
                    onChange={this.handleStartTime}
                    value={this.state.data.start_time || ''} />
                  {this.state.errors && this.state.errors.start_time && <div className="help is-danger">Please enter a start time</div>}
                </div>
                <div className="field">
                  <label className="label">Finish Time</label>
                  {this.state.data.finish_time &&  <h1>{this.state.data.finish_time || ''}</h1>}
                  <DatePicker
                    showTimeSelect
                    showTimeSelectOnly
                    onChange={this.handleFinishTime}
                    value={this.state.data.finish_time || ''} />
                  {this.state.errors && this.state.errors.finish_time && <div className="help is-danger">Please enter a finish time</div>}
                </div>
                <button className="button is-primary  ">Save</button>
              </div>
            </div>
          </form>
        </div>
      </section>

    )
  }
}


export default New
