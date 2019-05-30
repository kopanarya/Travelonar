import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import 'bulma'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import NavigationIndex from './components/common/NavigationIndex'
import NewsIndex from './components/news/NewsIndex'
import EventsIndex from './components/events/EventsIndex'
import Navbar from './components/common/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './style.scss'

class App extends React.Component{

  render(){
    return(
      <Router>

        <div>
          <Navbar/>
          <Switch>
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
