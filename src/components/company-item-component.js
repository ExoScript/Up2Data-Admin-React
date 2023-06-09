import React from 'react'

import PropTypes from 'prop-types'

import './company-item-component.css'

const CompanyItemComponent = (props) => {
  return (
    <div className="company-item-component-container border-bottom-1px border-top-1px">
      <div className="company-item-component-container01 border-right-1px">
        <div className="company-item-component-container02"></div>
        <div className="company-item-component-container03">
          <span>{props.company_name}</span>
          <span className="company-item-component-text01">
            {props.company_area}
          </span>
        </div>
      </div>
      <div className="company-item-component-container04 border-right-1px">
        <span>{props.contact_person}</span>
      </div>
      <div className="company-item-component-container05 border-right-1px">
        <div className="company-item-component-container06">
          <span>{props.street}</span>
          <span className="company-item-component-text04">
            {props.location}
          </span>
        </div>
      </div>
      <div className="company-item-component-container07 border-right-1px">
        <span>{props.employees}</span>
      </div>
      <div className="company-item-component-container08 border-right-1px">
        <span>{props.observed}</span>
      </div>
      <div className="company-item-component-container09 border-right-1px">
        <span>{props.last_scan2}</span>
      </div>
      <div className="company-item-component-container10 border-right-1px">
        <span>{props.text}</span>
      </div>
      <div className="company-item-component-container11 border-right-1px">
        <span>{props.status}</span>
      </div>
      <div className="company-item-component-container12">
        <svg viewBox="0 0 1024 1024" className="company-item-component-icon">
          <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
        </svg>
      </div>
    </div>
  )
}

CompanyItemComponent.defaultProps = {
  status: 'Observation',
  next_scan: '13.02.2023',
  text: '12.02.2023',
  last_scan2: '12.02.2023',
  last_scan: '12.02.2023',
  observed: '13',
  location: '12247 Berlin, Deutschland',
  last_scan1: '12.02.2023',
  company_area: 'Tech-Company',
  contact_person: 'Daniel Deutsch',
  next_scan1: '13.02.2023',
  employees: '87',
  company_name: 'HeyData GmbH',
  street: 'Ruthstr 12',
}

CompanyItemComponent.propTypes = {
  status: PropTypes.string,
  next_scan: PropTypes.string,
  text: PropTypes.string,
  last_scan2: PropTypes.string,
  last_scan: PropTypes.string,
  observed: PropTypes.string,
  location: PropTypes.string,
  last_scan1: PropTypes.string,
  company_area: PropTypes.string,
  contact_person: PropTypes.string,
  next_scan1: PropTypes.string,
  employees: PropTypes.string,
  company_name: PropTypes.string,
  street: PropTypes.string,
}

export default CompanyItemComponent
