import React from 'react'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import ContentComponent from '../components/content-component'
import './customers.css'

const Customers = (props) => {
  return (
    <div className="customers-container">
      <Helmet>
        <title>Customers - Up2Data-Admin</title>
        <meta property="og:title" content="Customers - Up2Data-Admin" />
      </Helmet>
      <div className="customers-container1">
        <Menu></Menu>
        <ContentComponent></ContentComponent>
      </div>
    </div>
  )
}

export default Customers
