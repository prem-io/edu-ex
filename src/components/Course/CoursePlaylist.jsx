import React, { Component } from 'react'
import './CoursePlaylist.scss'
import AppLayout from '../../AppLayout'

import ReactPlayer from "react-player"
import Breadcrumb from './Breadcrumb'

var VIDEOS = {
  deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  spider: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
}

class CoursePlaylist extends Component {
  state = {
    src: VIDEOS.deer,
    watchComplete: false
  }

  chooseVideo = (text) => {
    this.setState({
      src: VIDEOS[text]
    })
  }

  handleWatchComplete = ({ played }) => {
    if (played >= 0.8 && !this.state.watchComplete) {
      this.setState({
        watchComplete: true
      })
    }
  }

  render() {
    return (
      <AppLayout>
        <Breadcrumb />
        <div className="course-section-title">CoursePlaylist</div>
        <div className="row mx-0 playlist-container">
          <div className="col-md-8 px-0">
            {/* <video src={this.state.src} type="video/mp4" className="playlist-video" controls autoPlay={false} /> */}
            <ReactPlayer
              className="react-player"
              url={'this.state.src'}
              width="100%"
              height="100%"
              controls={true}
              onProgress={this.handleWatchComplete}
            />
          </div>
          <div className="col-md-4 playlist-bar">
            {Object.keys(VIDEOS).map((key, i) => (
              <div key={i} className="playlist-card cp" onClick={() => this.chooseVideo(key)}>
                <div className="playlist-card-count">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="playlist-card-info">
                  <div className="playlist-card-info-header">Introduction</div>
                  <div className="playlist-card-info-timestamp">02:30</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppLayout>
    )
  }
}

export default CoursePlaylist
