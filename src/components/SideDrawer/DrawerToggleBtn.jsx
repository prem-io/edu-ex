import React from 'react'
import './DrawerToggleBtn.css'

const DrawerToggleBtn = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
)

export default DrawerToggleBtn