import React from 'react'
import StoryCard from  './Card'


class Show extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state ={
      selectedStory: props.location.state.randomStory
    }
  }

  render(){
    return(
      <section className="section background-color ">
        <div className="container">
          <div >
            <StoryCard {...this.state.selectedStory} />
          </div>


        </div>
      </section>
    )
  }

}
export default Show
