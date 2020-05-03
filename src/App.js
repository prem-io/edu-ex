import React, { Component } from 'react'
import './App.scss'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import CourseLayout from './components/Course/CourseLayout'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import CoursePlaylist from './components/Course/CoursePlaylist'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={() => true ? <Redirect to="/courses" /> : <Redirect to="/login" />}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/courses" component={CourseLayout} exact />
            <Route path="/courses/:cid" component={CoursePlaylist} />
            <Route path="/leaderboard" component={CourseLayout} />
            <Route path="/myprofile" component={CourseLayout} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App

// https://s3.amazonaws.com/dev.systm.app/media-files/talents/mridula123%40yopmail.com/videos/1586486915%5Esunny.mp4
