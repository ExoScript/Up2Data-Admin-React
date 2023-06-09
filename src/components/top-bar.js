import React from 'react'

import PropTypes from 'prop-types'

import './top-bar.css'

const TopBar = (props) => {
  return (
    <div className="top-bar-top-bar border-bottom-1px">
      <div className="top-bar-container">
        <svg viewBox="0 0 1024 1024" className="top-bar-icon">
          <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
        </svg>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="top-bar-textinput input"
        />
      </div>
      <div className="top-bar-container1">
        <svg viewBox="0 0 1024 1024" className="top-bar-icon2">
          <path d="M768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
        </svg>
        <div data-thq="thq-dropdown" className="top-bar-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="top-bar-dropdown-toggle"
          >
            <span className="top-bar-text">{props.text}</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="top-bar-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="top-bar-icon4">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="top-bar-dropdown-list">
            <li data-thq="thq-dropdown" className="top-bar-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="top-bar-dropdown-toggle1"
              >
                <span className="top-bar-text1">{props.text1}</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="top-bar-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="top-bar-dropdown-toggle2"
              >
                <span className="top-bar-text2">{props.text2}</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="top-bar-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="top-bar-dropdown-toggle3"
              >
                <span className="top-bar-text3">{props.text3}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

TopBar.defaultProps = {
  textinput_placeholder: 'Quick Search',
  text2: 'Sub-menu Item',
  text: 'Daniel D.',
  text3: 'Sub-menu Item',
  text1: 'Sub-menu Item',
}

TopBar.propTypes = {
  textinput_placeholder: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default TopBar
