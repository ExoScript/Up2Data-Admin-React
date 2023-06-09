import React from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import TopBar from '../components/top-bar'
import MainComponent from '../components/main-component'
import './employees.css'

const Employees = (props) => {
  return (
    <div className="employees-container">
      <Helmet>
        <title>Employees - Up2Data-Admin</title>
        <meta property="og:title" content="Employees - Up2Data-Admin" />
      </Helmet>
      <div className="employees-container1">
        <Menu></Menu>
        <div className="employees-content-component">
          <div className="employees-container2 shadow-bottom">
            <TopBar></TopBar>
          </div>
          <div className="employees-container3">
            <MainComponent
              view_title="Employees"
              rootClassName="main-component-root-class-name2"
            ></MainComponent>
          </div>
          <div className="employees-container4 border-top-1px"></div>
        </div>
      </div>
    </div>
  )
}

export default Employees
