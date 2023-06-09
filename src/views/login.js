import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Up2Data-Admin</title>
        <meta property="og:title" content="Up2Data-Admin" />
      </Helmet>
      <div className="login-container01">
        <div className="login-container02 grad-bg">
          <div className="login-container03">
            <div className="login-container04">
              <img
                alt="image"
                src="/up2datalogo%20(3)1-200h.png"
                className="login-image"
              />
            </div>
            <span className="login-text">Up2Data</span>
          </div>
          <div className="login-container05">
            <div className="login-container06">
              <div className="login-container07">
                <span className="login-text01">Intern Admin</span>
                <span className="login-text02">Dashboard</span>
              </div>
              <span className="login-text03">
                For comprehensive data management and system control.
              </span>
            </div>
          </div>
        </div>
        <div className="login-container08">
          <div className="login-container09">
            <div className="login-container10">
              <span className="login-text04">System status:</span>
              <div className="login-container11"></div>
            </div>
          </div>
          <div className="login-container12">
            <div className="login-container13">
              <div className="login-container14">
                <span className="login-text05">Welcome to the Up2Data</span>
                <span className="login-text06">
                  the central hub for internal administration and data control.
                </span>
              </div>
              <div className="login-container15">
                <div className="input-container">
                  <div className="login-container17">
                    <span>E-mail</span>
                  </div>
                  <input
                    type="text"
                    placeholder="admin@up2data.io"
                    className="login-textinput input"
                  />
                </div>
                <div className="input-container">
                  <div className="login-container19">
                    <span>Secret-key</span>
                  </div>
                  <input
                    type="text"
                    placeholder="a31bc2F6"
                    className="login-textinput1 input"
                  />
                </div>
              </div>
              <div className="login-container20">
                <Link to="/customers" className="login-navlink">
                  <div className="login-container21 grad-bg clickable">
                    <span>Login</span>
                  </div>
                </Link>
                <div className="login-container22">
                  <span className="login-text10">
                    I forgot my security key!
                  </span>
                  <span className="login-text11 clickable">Creat new</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
