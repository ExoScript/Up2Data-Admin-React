import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import TopBar from '../components/top-bar'
import CompanyOverviewComponent from '../components/company-overview-component'
import './company-overview.css'

const CompanyOverview = (props) => {
  return (
    <div className="company-overview-container">
      <Helmet>
        <title>Company-Overview - Up2Data-Admin</title>
        <meta property="og:title" content="Company-Overview - Up2Data-Admin" />
      </Helmet>
      <div className="company-overview-container1">
        <Menu></Menu>
        <div className="company-overview-content-component">
          <div className="company-overview-container2 shadow-bottom">
            <TopBar></TopBar>
          </div>
          <div className="company-overview-container3 border-bottom-1px clickable">
            <Link to="/customers" className="company-overview-navlink">
              <div className="company-overview-container4 clickable">
                <svg viewBox="0 0 1024 1024" className="company-overview-icon">
                  <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                </svg>
                <span className="company-overview-text">Back to Companies</span>
              </div>
            </Link>
          </div>
          <div className="company-overview-container5">
            <CompanyOverviewComponent></CompanyOverviewComponent>
          </div>
          <div className="company-overview-container6 border-top-1px"></div>
        </div>
      </div>
    </div>
  )
}

export default CompanyOverview
