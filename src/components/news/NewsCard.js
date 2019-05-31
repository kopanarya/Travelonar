import React from 'react'


const NewsCard = ({title, description, urlToImage, publishedAt}) => {
  return(
    <div className="columns box ">
      <div className="column is-one-quarter news-column">
        <div className="column box">
          <img src ={urlToImage} />
        </div>
        <div className="column">
          {publishedAt}
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
export default NewsCard
