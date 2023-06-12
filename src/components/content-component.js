import React, { useState } from 'react'

import PropTypes from 'prop-types'

import TopBar from './top-bar'
import CompanyProfileComponent from './company-profile-component'
import MainComponent from './main-component'
import './content-component.css'

const ContentComponent = (props) => {
  const [view, setView] = useState('customers')
  return (
    <div className="content-component-content-component">
      <div className="content-component-container shadow-bottom">
        <TopBar></TopBar>
      </div>
      {view === 'company' && (
        <div className="content-component-container1 border-bottom-1px clickable">
          <div
            onClick={() => setView('customers')}
            className="content-component-container2 clickable"
          >
            <svg viewBox="0 0 1024 1024" className="content-component-icon">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
            <span className="content-component-text">{props.text}</span>
          </div>
        </div>
      )}
      <div className="content-component-container3">
        {view === 'company' && (
          <CompanyProfileComponent></CompanyProfileComponent>
        )}
        {view === 'customers' && (
          <MainComponent rootClassName="main-component-root-class-name1"></MainComponent>
        )}
      </div>
      <div className="content-component-container4 border-top-1px"></div>
    </div>
  )
}

ContentComponent.defaultProps = {
  text: 'Back to Companies',
}

ContentComponent.propTypes = {
  text: PropTypes.string,
}

export default ContentComponent
