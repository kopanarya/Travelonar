import React from 'react'
import axios from 'axios'
import NewsCard from  './Card'
import  Loader from '../common/Loader'


class Index extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    const currentCity = this.props.location.pathname

    this.state = {
      city: currentCity.slice(6),
      data: null
    }

  }
  componentDidMount(){
    axios.get('/api/news',{
      params: {
        q: this.state.city
      }
    })
      .then(res => this.setState({ data: res.data }))
  }
  render(){
    console.log(this.state.data)
    console.log(this.state.city)
    if(!this.state.data) return  <Loader />
    return(
      <section className="section has-background-warning">
        <div className="container">
          <div className="columns is-multiline news-index">
            {this.state.data.articles.map(article =>
              <div key={article.publishedAt}>
                <NewsCard {...article} />
              </div>
            )
            }
          </div>
        </div>
      </section>

    )
  }
}
export default Index
