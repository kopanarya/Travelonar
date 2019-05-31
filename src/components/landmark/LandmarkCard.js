import React from 'react'

const LandmarkCard = ({ticket_price, name, description, address , cityname, opening_hours, image, user}) => {
  return(
    <div className="columns box ">
      <div className="column is-one-quarter news-column">
        <div className="column  box">
          <img src ={image} />
        </div>
        <div className="columns">
          <div className="column is-half">
            Ticket Price:  {ticket_price} £
          </div>
          <div className="column is-half">
            {cityname}
          </div>
        </div>


      </div>
      <div className="column is-three-quarters news-column">
        <div className="column">
          <span className="title is-4 ">  {name}</span>
        </div>
        <div className="column">
          <span className="subtile is-4">  {description}</span>
        </div>
        <div className="column">
          <span className="subtile is-4">  {address}</span>
        </div>

        <div className="column">
          <span className="subtile is-4"> Opening hours: {opening_hours}</span>
        </div>
      </div>
    </div>
  )
}
export default LandmarkCard
