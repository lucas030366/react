import React from "react"
import { Switch, Route, Redirect } from "react-router"

import Home from "../components/Index"
import Users from "../components/user/Crud"
import Hooks from "../components/hooks/Hooks"

const route = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/hooks" component={Hooks} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default route