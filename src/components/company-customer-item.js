import React, { useState } from 'react'

import PropTypes from 'prop-types'

import CheckBoxComponent from './check-box-component'
import './company-customer-item.css'

const CompanyCustomerItem = (props) => {
  const [bg, setBg] = useState(false)
  return (
    <div className="company-customer-item-company-customer-item border-bottom-1px">
      <div className="company-customer-item-container border-right-1px">
        <CheckBoxComponent rootClassName="check-box-component-root-class-name77"></CheckBoxComponent>
      </div>
      <div className="company-customer-item-container01 border-right-1px">
        <div className="company-customer-item-container02">
          <img
            alt="image"
            src={props.image_src}
            className="company-customer-item-image"
          />
        </div>
        <span className="company-customer-item-text">{props.name}</span>
      </div>
      <div className="company-customer-item-container03 border-right-1px">
        <span>{props.locality}</span>
      </div>
      <div className="company-customer-item-container04 border-right-1px">
        <div className="company-customer-item-container05">
          <span className="company-customer-item-text2">{props.employees}</span>
        </div>
      </div>
      <div className="company-customer-item-container06 border-right-1px">
        <div className="company-customer-item-container07">
          <span className="company-customer-item-text3">{props.triggered}</span>
        </div>
      </div>
      <div className="company-customer-item-container08 border-right-1px">
        <span>{props.List}</span>
      </div>
      <div className="company-customer-item-container09 border-right-1px">
        <div className="company-customer-item-container10">
          <span className="company-customer-item-text5">{props.status}</span>
          <div className="company-customer-item-container11">
            <svg viewBox="0 0 1024 1024" className="btn-icon">
              <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="company-customer-item-container12">
        <div
          data-thq="thq-dropdown"
          className="company-customer-item-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="company-customer-item-dropdown-toggle"
          >
            <div
              data-thq="thq-dropdown-arrow"
              className="company-customer-item-dropdown-arrow"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="company-customer-item-icon2"
              >
                <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM597.333 213.333c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM597.333 810.667c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="company-customer-item-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              className="company-customer-item-dropdown list-item border-bottom-1px"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="company-customer-item-dropdown-toggle1"
              >
                <span className="company-customer-item-text6">Profile</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="company-customer-item-dropdown1 list-item border-bottom-1px"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="company-customer-item-dropdown-toggle2"
              >
                <span className="company-customer-item-text7">Scan</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="company-customer-item-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="company-customer-item-dropdown-toggle3"
              >
                <span className="company-customer-item-text8">Delete</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {bg && <div className="company-customer-item-container13"></div>}
    </div>
  )
}

CompanyCustomerItem.defaultProps = {
  employees: '53',
  List: 'New Deals',
  status: 'Scanned',
  locality: 'Berlin, Germany',
  text: 'Text',
  triggered: '13',
  name: 'Flaschenpost',
  image_src:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ69uy0UIZMT-bKF_bpo1U56HAti8_6VsKarlmkHwQfT9l_TmKMkvBuWQQoT7chrlHa-o&usqp=CAU',
}

CompanyCustomerItem.propTypes = {
  employees: PropTypes.string,
  List: PropTypes.string,
  status: PropTypes.string,
  locality: PropTypes.string,
  text: PropTypes.string,
  triggered: PropTypes.string,
  name: PropTypes.string,
  image_src: PropTypes.string,
}

export default CompanyCustomerItem
