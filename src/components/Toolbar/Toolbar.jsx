import React from 'react'
import './Toolbar.css'
import DrawerToggleBtn from '../SideDrawer/DrawerToggleBtn'

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleBtn click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Leader Board</a></li>
            <li><a href="/">My Profile</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Toolbar
