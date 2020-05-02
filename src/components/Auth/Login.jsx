import React, { useState } from 'react'
import './auth.scss'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const Login = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <div className="row mx-0 auth-container">
      <div className="col-12 col-md-6 auth-form-container">
        <div className="ex-logo">EX</div>
        <div className="welcome-text">Welcome!</div>
        <small className="text-muted mb-4">Please Login to continue.</small>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" value={state.email} onChange={handleInput} id="email" required />
            <small id="emailHelp" className="form-text text-muted">{""}</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className='password-field'>
              <input type={state.showPassword ? "text" : "password"} className="form-control" value={state.password} onChange={handleInput} id="password" required />
              {state.showPassword ?
                <EyeFilled className="password-icon" onClick={() => handlePwdVisibility('password')} />
                : <EyeInvisibleFilled className="password-icon" onClick={() => handlePwdVisibility('password')} />
              }
              <small className="form-text text-muted">min 8 characters, 1 special character</small>
              <small className="form-text text-muted float-right cp">Forgot Password?</small>
            </div>
          </div>
          <button type="submit" className="black-btn mt-2">Login</button>
        </form>
      </div>
      <div className="col-md-6 d-none d-md-block auth-img-container"></div>
    </div>
  )
}

export default Login
