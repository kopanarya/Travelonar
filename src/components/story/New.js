import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'
import Auth from '../../lib/Auth'
import axios from 'axios'

class StoryNew extends React.Component{

  constructor(){
    super()
    this.state ={
      data: {
        cityname: '',
        title: '',
        description: '',
        image: '',
        date: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeDate = this.handleChangeDate.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    console.log(data)
    this.setState({ data })
  }
  handleChangeDate(date) {
    console.log(date)
    this.setState({
      data: {
        ...this.state.data,
        date: date.toLocaleDateString()
      }
    })
  }
  handleSubmit(e){
    e.preventDefault()
    const token = Auth.getToken()
    axios.post('/api/stories', this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(this.props.history.push('/stories'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }



  render(){
    if(!this.state.data) return null
    return(
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="columns is-centered">
              <div className="column is-half-desktop is-half-tablet">
                <div className="field">
                  <label className="label">City Name</label>
                  <div className="control">
                    <input
                      className="input"
                      name="cityname"
                      placeholder="The name of city!"
                      onChange={this.handleChange}
                      value={this.state.data.cityname || ''}
                    />
                  </div>
                  {this.state.errors.name && <div className="help is-danger">{this.state.errors.name}</div>}
                </div>


                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      name="title"
                      placeholder="The title of your story!"
                      onChange={this.handleChange}
                      value={this.state.data.title || ''}
                    />
                  </div>
                  {this.state.errors.name && <div className="help is-danger">{this.state.errors.name}</div>}
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
                  {this.state.errors.name && <div className="help is-danger">{this.state.errors.name}</div>}
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
                  {this.state.errors.name && <div className="help is-danger">{this.state.errors.name}</div>}
                </div>


                <div className="field">
                  <label className="label">Date</label>
                  {this.state.data.date &&  <h1>{this.state.data.date || ''}</h1>}
                  <DatePicker
                    onChange={this.handleChangeDate}
                    value={this.state.data.date || ''}
                  />
                
                  {this.state.errors.name && <div className="help is-danger">{this.state.errors.name}</div>}
                </div>

                <button>Submit</button>
              </div>



            </div>
          </form>
        </div>
      </section>
    )
  }

}
export default StoryNew
