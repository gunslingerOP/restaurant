/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import iconSet from "../selection.json"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header/header.js"
import "./layout.scss"
import IcomoonReact from "icomoon-react"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="main-container">
        <main>{children}</main>
        <footer id="footer">
          <div className="footer-top">
            <div className="container limit-width">
              <div className="row">
                <div className="footer-info">
                  <h3>SAJ ALREEF</h3>
                  <p>
                    A108 Adam Street NY 535022, USA
                    <strong>Phone: +9647705344322</strong>
                    <strong>Email: hasanaqeel38@gmail.com</strong>
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <IcomoonReact
                        iconSet={iconSet}
                        icon="bxl-facebook"
                        size={20}
                        color="#ffff"
                      />
                    </a>
                    <a href="#" className="whatsapp">
                      <IcomoonReact
                        iconSet={iconSet}
                        icon="bxl-whatsapp"
                        size={20}
                        color="#ffff"
                      />{" "}
                    </a>
                    <a href="#" className="instagram">
                      <IcomoonReact
                        iconSet={iconSet}
                        icon="bxl-instagram"
                        size={20}
                        color="#ffff"
                      />{" "}
                    </a>
                    <a href="#" className="telegram">
                      <IcomoonReact
                        iconSet={iconSet}
                        icon="bxl-telegram"
                        size={20}
                        color="#ffff"
                      />
                    </a>
                  </div>
                </div>

                <div className="footer-logo">
                  <StaticImage src="../images/saj.png" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
