import React, { useState } from 'react'
import './CoursePlaylist.scss'
import AppLayout from '../../AppLayout'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

const CoursePlaylist = () => {
  const playList = []
  for (let i = 0; i < 20; i++) {
    playList.push(
      <div className="playlist-card">
        <div className="playlist-card-count">
          <span>{i + 1}</span>
        </div>
        <div className="playlist-card-info">
          <div className="playlist-card-info-header">Introduction</div>
          <div className="playlist-card-info-timestamp">02:30</div>
        </div>
      </div>
    )
  }

  return (
    <AppLayout>
      CoursePlaylist
      <div className="row mx-0 playlist-container">
        <div className="col-md-8">
          <Video autoPlay loop muted
            className="playlist-video"
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            onCanPlayThrough={() => { }}>
            <source src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4" type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
          </Video>
        </div>
        <div className="col-md-4 playlist-bar">
          {playList}
        </div>
      </div>
    </AppLayout>
  )
}

export default CoursePlaylist
