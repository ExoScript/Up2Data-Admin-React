import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './check-box-component.css'

const CheckBoxComponent = (props) => {
  const [isCheck, setIsCheck] = useState(false)
  const [id, setId] = useState('-')
  return (
    <div
      className={`check-box-component-check-box-component ${props.rootClassName} `}
    >
      {!isCheck && (
        <div
          onClick={() => setIsCheck(true)}
          className="check-box-component-check-false"
        >
          <svg viewBox="0 0 1024 1024" className="check-box-component-icon">
            <path
              d="M384 690l452-452 60 60-512 512-238-238 60-60z"
              className=""
            ></path>
          </svg>
        </div>
      )}
      {isCheck && (
        <div
          onClick={() => setIsCheck(false)}
          className="check-box-component-check-true"
        >
          <svg viewBox="0 0 1024 1024" className="check-box-component-icon2">
            <path
              d="M384 690l452-452 60 60-512 512-238-238 60-60z"
              className=""
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}

CheckBoxComponent.defaultProps = {
  rootClassName: '',
}

CheckBoxComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default CheckBoxComponent
