import React from 'react'

import './SideDrawer.css'
import { NavLink } from 'react-router-dom'

const SideDrawer = props => {
  let drawerClass = 'side-drawer'

  if (props.show) {
    drawerClass = 'side-drawer open'
  }

  return (
    <nav className={drawerClass}>
      <ul>
        <li>
          <NavLink activeClassName='is-active' to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to="/leaderboard">Leader Board</NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to="/myprofile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer