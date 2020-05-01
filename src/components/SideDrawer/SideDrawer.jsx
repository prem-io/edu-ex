import React from 'react'

import './SideDrawer.css'

const SideDrawer = props => {
  let drawerClass = 'side-drawer'

  if (props.show) {
    drawerClass = 'side-drawer open'
  }

  return (
    <nav className={drawerClass}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer