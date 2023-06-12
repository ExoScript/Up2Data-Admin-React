import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Customers from './views/customers'
import Employees from './views/employees'
import Dashboard from './views/dashboard'
import CompanyOverview from './views/company-overview'
import Login from './views/login'
import Messages from './views/messages'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Customers} exact path="/customers" />
        <Route component={Employees} exact path="/employees" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={CompanyOverview} exact path="/company-overview" />
        <Route component={Login} exact path="/" />
        <Route component={Messages} exact path="/messages" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
