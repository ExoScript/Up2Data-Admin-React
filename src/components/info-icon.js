import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './info-icon.css'

const InfoIcon = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="info-icon-info-icon"
    >
      {isVisible && (
        <div className="info-icon-container">
          <svg viewBox="0 0 1024 1024" className="info-icon-icon">
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </div>
      )}
      <span className="info-icon-text">{props.txt}</span>
    </div>
  )
}

InfoIcon.defaultProps = {
  txt: 'Sales',
}

InfoIcon.propTypes = {
  txt: PropTypes.string,
}

export default InfoIcon
