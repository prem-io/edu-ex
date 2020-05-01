import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import CourseLayout from './components/Course/CourseLayout'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  render() {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="app">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main className="container">
          <Router>
            <Switch>
              <Route path="/courses" component={CourseLayout} />
            </Switch>
          </Router>
        </main>
      </div>
    )
  }
}

export default App
