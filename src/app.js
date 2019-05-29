import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import 'bulma'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import SecureRoute from './components/common/SecureRoute'


class App extends React.Component{

  render(){
    return(
      <Router>

        <div>
          <Navbar/>
          <Switch>

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
