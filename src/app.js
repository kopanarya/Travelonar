import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import 'bulma'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import NavigationIndex from './components/common/NavigationIndex'
import NewsIndex from './components/news/Index'
import EventsIndex from './components/events/Index'
import Navbar from './components/common/Navbar'
import StoryIndex from './components/story/Index'
import StoryNew from './components/story/New'
import RandomStory from './components/story/Show'
import CityStory from './components/story/CityIndex'
import LandmarkNew from './components/landmark/New'
import LandmarksIndex from './components/landmark/Index'
import CityLandmark from './components/landmark/CityIndex'
import RestaurantIndex from './components/restaurant/Index'
import RestaurantShow from './components/restaurant/Show'
import NightLife from './components/nightlife/NightLife'
import BarShow from './components/nightlife/Show'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import SecureRoute from './components/common/SecureRoute'
import FlashMessages from './components/common/FlashMessages'


class App extends React.Component{

  render(){
    return(
      <Router>
        <div>
          <Navbar/>
          <FlashMessages />
          <Switch>
            <SecureRoute path="/stories/new" component={StoryNew} />
            <SecureRoute path="/landmarks/new" component={LandmarkNew} />
            <Route path='/stories/randomstory/:id' component={RandomStory} />
            <Route path="/landmarks/:cityname" component={CityLandmark} />
            <Route path="/stories/:cityname" component={CityStory} />
            <Route path="/bars/show" component={BarShow} />
            <Route path="/restaurants/show" component={RestaurantShow} />
            <Route path="/landmarks" component={LandmarksIndex} />
            <Route path="/events" component={EventsIndex} />
            <Route path="/news" component={NewsIndex} />
            <Route path="/restaurants" component={RestaurantIndex} />
            <Route path="/bars" component={NightLife} />
            <Route path="/stories" component={StoryIndex} />
            <Route path="/navigation" component={NavigationIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path='/' component={Home}  />

          </Switch>
        </div>
      </Router>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
