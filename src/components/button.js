import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './button.css'

const Button = (props) => {
  const [btn, setBtn] = useState(0)
  return (
    <div className={`button-container ${props.rootClassName} `}>
      {btn === 0 && (
        <div onClick={() => setBtn(1)} className="button-btn1">
          <span>{props.btn_1}</span>
        </div>
      )}
      {btn === 1 && (
        <div className="button-btn2">
          <span>{props.btn_1}</span>
        </div>
      )}
      {btn === 3 && (
        <div className="button-btn21">
          <span>{props.btn_11}</span>
        </div>
      )}
      {btn === 4 && (
        <div className="button-btn22">
          <span>{props.btn_111}</span>
        </div>
      )}
    </div>
  )
}

Button.defaultProps = {
  rootClassName: '',
  btn_11: 'Button to click',
  btn_111: 'Button to click',
  btn_1: 'Button to click',
}

Button.propTypes = {
  rootClassName: PropTypes.string,
  btn_11: PropTypes.string,
  btn_111: PropTypes.string,
  btn_1: PropTypes.string,
}

export default Button
