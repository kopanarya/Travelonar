import React from 'react'
import ReactDOM from 'react-dom'

class Home extends React.Component{
  render(){
    return(
      <section className='section'>
        <div className="container">
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input className="input is-medium" type="email" placeholder="Normal" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
