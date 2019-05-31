import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import 'bulma'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import NavigationIndex from './components/common/NavigationIndex'
import NewsIndex from './components/news/NewsIndex'
import EventsIndex from './components/events/EventsIndex'
import Navbar from './components/common/Navbar'
import StoryIndex from './components/story/StoryIndex'
import LandmarksIndex from './components/landmark/LandmarksIndex'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

class App extends React.Component{

  render(){
    return(
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/landmarks" component={LandmarksIndex} />
            <Route path="/stories" component={StoryIndex} />
            <Route path="/events" component={EventsIndex} />
            <Route path="/news" component={NewsIndex} />
            <Route path="/navigationIndex" component={NavigationIndex} />
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
