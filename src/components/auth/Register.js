import React from 'react'
import axios from 'axios'

class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    // merge data on state with new data from the form
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    // set the data back on state
    console.log(data,'hi there')
    this.setState({ data }) // equivalent to { data: data }
  }
  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login')) // redirect the user to the login page...

      .catch(err => {
        console.log(err.response.data)
        this.setState({errors: err.response.data.error})
      }
      )
  }

  render() {

    if(!this.state.data) return null

    return (
      <section className="section short-section  has-background-warning ">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label title is-3 auth-label">Username</label>
                  <div className="control">
                    <input
                      className="input"
                      name="username"
                      placeholder="eg: leela3000"
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors && this.state.errors.username && <div className="help is-danger">{this.state.errors.username[0]}</div>}

                </div>
                <div className="field">
                  <label className="label title is-3 auth-label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      type="email"
                      placeholder="eg: leela@planetexpress.nnyc"
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors && this.state.errors.email && <div className="help is-danger">
                    {this.state.errors.email[0]}</div>}
                </div>
                <div className="field">
                  <label className="label title is-3 auth-label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password"
                      type="password"
                      placeholder="eg: ••••••••"
                      onChange={this.handleChange}
                    />
                  </div>

                </div>
                {this.state.errors && this.state.errors.password && <div className="help is-danger">
                  {this.state.errors.password[0]}</div>}
                <div className="field">
                  <label className="label title is-3 auth-label">Password Confirmation</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password_confirmation"
                      type="password"
                      placeholder="eg: ••••••••"
                      onChange={this.handleChange}
                    />
                  </div>

                </div>
                {this.state.errors && this.state.errors.password_confirmation && <div className="help is-danger">
                  {this.state.errors.password_confirmation[0]}</div>}
                <button className="button is-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Register
