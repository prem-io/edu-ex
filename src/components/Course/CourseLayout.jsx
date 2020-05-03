import React, { Component } from 'react'
import './CourseLayout.scss'
import ProgressBar from './ProgressBar'
import { CodeOutlined, BgColorsOutlined } from '@ant-design/icons'
import AppLayout from '../../AppLayout'
import * as color from '../../utils/colors'
import { NavLink } from 'react-router-dom'
class CourseLayout extends Component {
  render() {
    return (
      <AppLayout>
        <div className="course-container">
          <div className="course-section-title">Your Courses</div>
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <div className="course-card shadow">
                <small className="course-card-text">Hands On</small>
                <div className="course-card-title">Full Stack Development</div>
                <ProgressBar className="my-2" color="#2abdc0" percentage={18} />
                <div className="course-card-status mb-3">
                  <span>25</span><span>%</span>
                  <span>{`( ${5} sessions completed )`}</span>
                </div>
                <NavLink to="/courses/1" className="app-btn teal-btn td">Continue Sessions</NavLink>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="course-card shadow">
                <small className="course-card-text">Hands On</small>
                <div className="course-card-title">Full Stack Development</div>
                <ProgressBar className="my-2" color="#2abdc0" percentage={18} />
                <div className="course-card-status mb-3">
                  <span>25</span><span>%</span>
                  <span>{`( ${5} sessions completed )`}</span>
                </div>
                <NavLink to="/courses/1" className="app-btn teal-btn td">Continue Sessions</NavLink>
              </div>
            </div>
          </div>

          <div className="course-section-title">Available Course</div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="avail-course-card shadow">
                <div className="avail-course-banner" style={{ backgroundColor: color.bluePurple }}>
                  <CodeOutlined style={{ fontSize: "30px", color: '#ffffff', paddingLeft: '10px' }} />
                  <div className="avail-course-banner-ribbon">
                    <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '1.5px' }}>NEW</span>
                  </div>
                  <div className="avail-course-hours"><span className="px-1">3</span><span>Hours</span></div>
                </div>

                <div className="avail-course-body">
                  <small className="avail-course-text">Techdegree</small>
                  <h5 className="avail-course-title">Full Stack Development</h5>
                  <p className="avail-course-details">Learn to build interactive websites and powerful web applications with JavaScript.</p>
                  <button type="button" className="app-btn border-btn mr-3">Explore</button>
                  <button type="button" className="app-btn border-btn">Enroll</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="avail-course-card shadow">
                <div className="avail-course-banner" style={{ backgroundColor: color.forestGreen }}>
                  <CodeOutlined style={{ fontSize: "30px", color: '#ffffff', paddingLeft: '10px' }} />
                  <div className="avail-course-hours"><span className="px-1">3</span><span>Hours</span></div>
                </div>

                <div className="avail-course-body">Full Stack Development</div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="avail-course-card shadow">
                <div className="avail-course-banner" style={{ backgroundColor: color.blue }}>
                  <CodeOutlined style={{ fontSize: "30px", color: '#ffffff', paddingLeft: '10px' }} />
                  <div className="avail-course-hours"><span className="px-1">3</span><span>Hours</span></div>
                </div>

                <div className="avail-course-body">Full Stack Development</div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="avail-course-card shadow">
                <div className="avail-course-banner" style={{ backgroundColor: color.mintGreen }}>
                  <CodeOutlined style={{ fontSize: "30px", color: '#ffffff', paddingLeft: '10px' }} />
                  <div className="avail-course-hours"><span className="px-1">3</span><span>Hours</span></div>
                </div>

                <div className="avail-course-body">Full Stack Development</div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    )
  }
}

export default CourseLayout
