import React, { Component } from 'react'
import './CourseLayout.css'
import ProgressBar from './ProgressBar'
import { CodeOutlined } from '@ant-design/icons'
import AppLayout from '../../AppLayout'

class CourseLayout extends Component {
  render() {
    return (
      <AppLayout>
        <div className="course-container">
          <div>Your Courses</div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="course-card shadow">
                <div>Hands On</div>
                <div>Full Stack Development</div>
                <ProgressBar percentage={18} />
                <div>
                  <span>25%</span>
                  <span>{5} sessions completed</span>
                </div>
                <button type="button" class="btn btn-info">Continue Sessions</button>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="course-card shadow">
                <div>Hands On</div>
                <div>Full Stack Development</div>
                <ProgressBar percentage={18} />
                <div>
                  <span>25%</span>
                  <span>{5} sessions completed</span>
                </div>
                <button type="button" class="btn btn-info">Continue Sessions</button>
              </div>
            </div>
          </div>

          <div>Available Course</div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="avail-course-card shadow">
                <div className="avail-course-banner" style={{ backgroundColor: '#3659a2' }}>
                  <CodeOutlined style={{ fontSize: "30px", color: '#ffffff', paddingLeft: '10px' }} />
                  <div className="avail-course-banner-ribbon">
                    <span>NEW</span>
                  </div>
                  <div className="avail-course-hours"><span className="px-1">3</span><span>Hours</span></div>
                </div>

                <div className="avail-course-body">Full Stack Development</div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="avail-course-card shadow">
                <div className="avail-course-banner" style={{ backgroundColor: '#1B8091' }}>
                  <CodeOutlined style={{ fontSize: "30px", color: '#ffffff', paddingLeft: '10px' }} />
                  <div className="avail-course-hours"><span className="px-1">3</span><span>Hours</span></div>
                </div>

                <div className="avail-course-body">Full Stack Development</div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="avail-course-card shadow">
                <div className="avail-course-banner" style={{ backgroundColor: '#3659a2' }}>
                  <CodeOutlined style={{ fontSize: "30px", color: '#ffffff', paddingLeft: '10px' }} />
                  <div className="avail-course-hours"><span className="px-1">3</span><span>Hours</span></div>
                </div>

                <div className="avail-course-body">Full Stack Development</div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="avail-course-card shadow">
                <div className="avail-course-banner" style={{ backgroundColor: '#3659a2' }}>
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
