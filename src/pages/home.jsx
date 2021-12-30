import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"
const Home = () => (
  <>
    <Layout>
      <Seo title="Saj Al-reef" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <p>
        <Link to="/menu">Go to page 2</Link> <br />
        <Link to="/using-typescript/">{'Go to "Using TypeScript"'}</Link> <br />
        <Link to="/about">{'Go to "Using SSR"'}</Link> <br />
        <Link to="/using-dsg">{'Go to "Using DSG"'}</Link>
      </p>
    </Layout>
  </>
)

export default Home
