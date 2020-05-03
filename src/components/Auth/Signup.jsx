import React, { useState } from 'react'
import './auth.scss'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const Signup = () => {
  const [state, setstate] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  })

  const handleInput = (e) => {
    console.log(e.target.value)
    setstate({
      ...state,
      [e.target.id]: e.target.value
    })
  }

  const handlePwdVisibility = (type) => {
    if (type === 'password') {
      setstate({
        ...state,
        showPassword: !state.showPassword,
      })
    } else if (type === 'confirm') {
      setstate({
        ...state,
        showConfirmPassword: !state.showConfirmPassword,
      })
    }
  }

  return (
    <div className="row mx-0 auth-container">
      <div className="col-12 col-md-6 auth-form-container">
        <div className="ex-logo">EX</div>
        <div className="welcome-text">Welcome!</div>
        <div className="welcome-text my-4">Let's setup your account</div>
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" className="form-control" value={state.fullname} onChange={handleInput} id="fullname" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" value={state.email} onChange={handleInput} id="email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className='password-field'>
              <input type={state.showPassword ? "text" : "password"} className="form-control" value={state.password} onChange={handleInput} id="password" />
              {state.showPassword ?
                <EyeFilled className="password-icon" onClick={() => handlePwdVisibility('password')} />
                : <EyeInvisibleFilled className="password-icon" onClick={() => handlePwdVisibility('password')} />
              }
              <small id="passwordHelp" className="form-text text-muted">min 8 characters, 1 special character</small>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className='password-field'>
              <input type={state.showConfirmPassword ? "text" : "password"} className="form-control" value={state.confirmPassword} onChange={handleInput} id="confirmPassword" />
              {state.showConfirmPassword ?
                <EyeFilled className="password-icon" onClick={() => handlePwdVisibility('confirm')} />
                : <EyeInvisibleFilled className="password-icon" onClick={() => handlePwdVisibility('confirm')} />
              }
              <small id="passwordHelp" className="form-text text-muted">min 8 characters, 1 special character</small>
            </div>
          </div>
          <button type="submit" className="app-btn btn black-btn mt-2">Create Account</button>
        </form>
      </div>
      <div className="col-md-6 d-none d-md-block auth-img-container"></div>
    </div>
  )
}

export default Signup
