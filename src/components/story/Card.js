import React from 'react'

const Card = ({title, description, cityname, date, image, user}) => {
  return(
    <div className="columns box ">
      <div className="column is-one-quarter news-column">
        <div className="column  box">
          <img src ={image} />
        </div>
        <div className="columns">
          <div className="column is-one-half-mobile is-one-half">
            {cityname}
          </div>
          <div className="column is-one-half-mobile is-one-half">
            {date}
          </div>

        </div>
      </div>
      <div className="column is-three-quarters news-column">
        <div className="column">
          <span className="title is-4" >  {title} </span>
        </div>
        <div className="column">
          <span className="subtile is-4">  {description}</span>
        </div>
      </div>
    </div>
  )
}
export default Card
