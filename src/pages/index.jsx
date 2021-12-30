import * as React from "react"

import { Router } from "@reach/router"
import Home from "./home"
const IndexPage = () => (
  <Router>
    <Home path="/" />

    <notFoundPage default />
  </Router>
)

export default IndexPage
