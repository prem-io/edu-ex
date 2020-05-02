import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CourseLayout from './components/Course/CourseLayout'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/courses" component={CourseLayout} />
            <Route path="/leaderboard" component={CourseLayout} />
            <Route path="/myprofile" component={CourseLayout} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
