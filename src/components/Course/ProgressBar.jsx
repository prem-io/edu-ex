import React from 'react'

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress" style={{ height: '7px' }}>
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: `${percentage}%`, height: '100%' }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  )
}

export default ProgressBar
