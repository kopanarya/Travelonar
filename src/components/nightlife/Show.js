import React from 'react'
import axios from 'axios'


class Show extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      currentBar: props.location.state.selectedBar,
      data: null
    }
  }
  componentDidMount(){
    axios.get('/api/bars/show',{
      params: {
        placeid: String(this.state.currentBar.place_id)
      }
    })

      .then(res => this.setState({data: res.data}))
  }

  render(){
    if(!this.state) return <p>Loading</p>
    if(!this.state.data) return null

    console.log(this.state.data.result.opening_hours.weekday_text)

    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline  box">
            <div className="column is-one-half">
              <div className="column is-full ">
                <h2 className="title is-2">
                  {this.state.data.result.name}
                </h2>
                <hr/>
              </div>
              <div className="column is-full">
                <p className="subtitle is-4"> <strong>Phone Number: </strong>
                  {this.state.data.result.international_phone_number} </p>
                <hr/>
              </div>
              <div className="column is-full">
                <p className="subtitle is-4"> <strong>Website: </strong>
                  <a href={this.state.data.result.website}>{this.state.data.result.website}</a> </p>
                <hr/>
              </div>

              <div className="column is-full">
                {this.state.data.result.opening_hours.open_now && <span className="subtitle is-4 has-text-primary">Open</span>}
                {!this.state.data.result.opening_hours.open_now&& <span className="subtitle is-4 has-text-danger">Closed</span>}
                <hr/>
              </div>
              <div className="column is-full">
                <p className="subtitle is-4"> <strong>Rating: </strong>
                  {this.state.data.result.rating} </p>
                <hr/>
              </div>
              <div className="column is-full">
                <p className="subtitle is-4"><strong>Address: </strong>
                  {this.state.data.result.vicinity}</p>
              </div>
            </div>

            <div className="column is-one-half box">
              <h2  className="subtitle is-3">Openin Hours</h2>
              <ul className="menu-list">
                {this.state.data.result.opening_hours.weekday_text.map(day =>
                  <li key={day} className="subtitle is-4">{day}</li>
                )}
              </ul>

            </div>
          </div>
          <div className="columns is-multiline box">
            {this.state.data.result.reviews.map( review =>
              <div key={review.time} className="columns is-multiline box">
                <div  className="column is-one-quarter box">
                  <div className="column is-full">
                    <img src={review.profile_photo_url} />
                  </div>
                  <div className="column is-one-half">
                    {review.author_name}
                  </div>
                  <div className="column is-one-half">
                    Rating: {review.rating}
                  </div>
                </div>
                <div className="column is-three-quarters">
                  {review.text}
                </div>

              </div>

            )}

          </div>

        </div>
      </section>

    )
  }

}
export default Show