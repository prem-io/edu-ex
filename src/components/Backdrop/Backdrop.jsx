import React from 'react'

import './Backdrop.css'

const backdrop = props => {
  console.log('back')
  return <div className="backdrop" onClick={props.click} />
}

export default backdrop