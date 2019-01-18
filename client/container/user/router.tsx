import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login'
import Registry from './registry'
import User from './index'
import Customer from './customer'
import CustomerAdd from './customer/add'
class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/user' exact component={User} />
        <Route path='/user/customer' exact component={Customer} />
        <Route path='/user/customer/add' component={CustomerAdd} />
        <Route path='/login' exact component={Login} />
        <Route path='/registry' exact component={Registry} />
      </Switch>
    )
  }
}
export default Main