import React from 'react'
import axios from 'axios'
import he from 'he'



class NewsIndex extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    const currentCity = this.props.location.pathname

    this.state = {
      city: currentCity.slice(8),
      data: null
    }


  }
  decodeHTML(str) {
    return he.decode(str)
  }

  componentDidMount(){

    axios.get('/api/locations', {
      params: {
        location: this.state.city
      }
    })
      .then(res => {
        console.log('hi there'+res.data)
        this.setState({ data: res.data })
      })

  }



  render(){
    if(!this.state.data) return <p>Loading...</p>
    console.log(this.state.data)
    return(
      <section className="section">
        <div className="container">
          {this.state.data.events.event.map(event =>
            <div key={event.id}>
              <div className="columns box ">
                <div className="column is-one-quarter news-column">
                  <div className="column box">
                    { event.image &&   <img src ={ event.image.medium.url} />}
                  </div>
                  <div className="column">
                    {event.start_time}
                  </div>
                  <div className="column">
                    {event.city_name}
                  </div>

                </div>
                <div className="column is-three-quarters news-column">
                  <div className="column">
                    <span className="title is-4" >  {event.title} </span>
                  </div>
                  <div className="column">
                    <span>

                      {event.venue_name} </span>
                  </div>
                </div>
              </div>
            </div>
          )
          }

        </div>
      </section>

    )
  }
}
export default NewsIndex
