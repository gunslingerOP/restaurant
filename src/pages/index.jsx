import * as React from "react"

import { Router, Route, Switch, Redirect } from "@reach/router"

import Layout from "../components/layout"
import Home from "./home"
const IndexPage = () => (
  <Layout>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/home" />
          }}
        />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  </Layout>
)

export default IndexPage
