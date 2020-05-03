import React from 'react'

const ProgressBar = ({ className, backgroundColor, color, percentage }) => {
  className = className !== undefined ? " " + className : ''
  backgroundColor = backgroundColor !== undefined ? backgroundColor : '#e9ecef'
  color = color !== undefined ? color : '#28a745'

  return (
    <div className={`progress${className}`} style={{ backgroundColor, height: '7px' }}>
      <div
        className={'progress-bar'}
        role="progressbar"
        style={{ width: `${percentage}%`, backgroundColor: color, height: '100%' }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  )
}

export default ProgressBar
