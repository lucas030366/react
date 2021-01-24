import React from "react"
import { Switch, Route, Redirect } from "react-router"

import Home from "../components/Index"
import Users from "../components/user/Crud"
import Hooks from "../components/hooks/Hooks"
import Location from "../components/hooks/Location"
import ReduxIndex from "../components/redux/index"
import Form from "../components/formulario/Form"

const route = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/hooks" component={Hooks} />
      <Route path="/location" component={Location} />
      <Route path="/redux" component={ReduxIndex} />
      <Route path="/form" component={Form} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default route