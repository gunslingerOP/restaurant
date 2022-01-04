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
import { Trans } from "gatsby-plugin-react-i18next"
import { I18nextContext } from "gatsby-plugin-react-i18next"
import Header from "./header/header.js"
import "./layout.scss"
import IcomoonReact from "icomoon-react"

const Layout = ({ children }) => {
  const context = React.useContext(I18nextContext)
  const language = context.language
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
      <div className={`main-container ${language === "ar" ? "rtl" : "ltr"}`}>
        <main>{children}</main>
        <footer id="footer">
          <div className="footer-top">
            <div className="container limit-width">
              <div className="row">
                <div className="footer-info">
                  <h3>
                    <Trans>SAJ ALREEF</Trans>
                  </h3>
                  <p>
                    <Trans>Baghdad,Al-mansour, 14 Ramadan street</Trans>
                    <strong>
                      <Trans>Phone</Trans>: +9647705344322
                    </strong>
                    <strong>
                      <Trans>Email</Trans>: hasanaqeel38@gmail.com
                    </strong>
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
