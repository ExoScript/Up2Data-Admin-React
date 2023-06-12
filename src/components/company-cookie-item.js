import React, { useState } from 'react'

import PropTypes from 'prop-types'

import CheckBoxComponent from './check-box-component'
import './company-cookie-item.css'

const CompanyCookieItem = (props) => {
  const [bg, setBg] = useState(false)
  return (
    <div className="company-cookie-item-company-cookie-item border-bottom-1px">
      <div className="company-cookie-item-container border-right-1px">
        <CheckBoxComponent rootClassName="check-box-component-root-class-name82"></CheckBoxComponent>
      </div>
      <div className="company-cookie-item-container01 border-right-1px">
        <span className="company-cookie-item-text">{props.name}</span>
        <span className="company-cookie-item-text1">{props.email1}</span>
      </div>
      <div className="company-cookie-item-container02 border-right-1px">
        <div className="company-cookie-item-container03">
          <span className="company-cookie-item-text2">{props.request}</span>
        </div>
      </div>
      <div className="company-cookie-item-container04 border-right-1px">
        <div className="company-cookie-item-container05">
          <span className="company-cookie-item-text3">{props.status}</span>
          <div className="company-cookie-item-container06">
            <svg viewBox="0 0 1024 1024" className="btn-icon">
              <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="company-cookie-item-container07 border-right-1px">
        <span>{props.last_use}</span>
      </div>
      <div className="company-cookie-item-container08 border-right-1px">
        <div className="btn-lila">
          <svg viewBox="0 0 1024 1024" className="btn-icon">
            <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"></path>
          </svg>
          <span>Profile</span>
        </div>
      </div>
      <div className="company-cookie-item-container10 border-right-1px">
        <div className="company-cookie-item-container11 btn-white">
          <svg viewBox="0 0 1024 1024" className="btn-icon">
            <path d="M469.333 341.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v384c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h384c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-384c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM469.333 426.667h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v384c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-384c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-384c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM213.333 597.333h-42.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-384c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-384c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v384c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h42.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
          <span>Copy</span>
        </div>
      </div>
      <div className="company-cookie-item-container12">
        <div
          data-thq="thq-dropdown"
          className="company-cookie-item-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="company-cookie-item-dropdown-toggle"
          >
            <div
              data-thq="thq-dropdown-arrow"
              className="company-cookie-item-dropdown-arrow"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="company-cookie-item-icon6"
              >
                <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM597.333 213.333c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM597.333 810.667c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="company-cookie-item-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              className="company-cookie-item-dropdown list-item border-bottom-1px"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="company-cookie-item-dropdown-toggle1"
              >
                <span className="company-cookie-item-text7">Details</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="company-cookie-item-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="company-cookie-item-dropdown-toggle2"
              >
                <span className="company-cookie-item-text8">Remove</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {bg && <div className="company-cookie-item-container13"></div>}
    </div>
  )
}

CompanyCookieItem.defaultProps = {
  name: 'Daniel Deutsch',
  email: 'daniel@heydata.eu',
  last_use: '12.02.2023',
  request: '53',
  status: 'Scanned',
  email1: 'daniel@heydata.eu',
}

CompanyCookieItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  last_use: PropTypes.string,
  request: PropTypes.string,
  status: PropTypes.string,
  email1: PropTypes.string,
}

export default CompanyCookieItem
