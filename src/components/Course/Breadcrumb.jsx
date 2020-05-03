import React from 'react'
import './Breadcrumb.scss'

import { NavLink } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><NavLink to="/courses">Home</NavLink></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
