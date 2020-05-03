import React from 'react'
import './Toolbar.scss'

import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn'
import { NavLink } from 'react-router-dom'

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleBtn click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/">THE LOGO</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li><NavLink activeClassName='is-active' to="/courses">Courses</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/leaderboard">Leader Board</NavLink></li>
            <li><NavLink activeClassName='is-active' to="/myprofile">My Profile</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Toolbar
