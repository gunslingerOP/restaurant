import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.scss"
import iconSet from "../../selection.json"
import IcomoonReact from "icomoon-react"
import { useState, useEffect } from "react"
import MobileHeader from "./mobile-header"
import { Trans } from "gatsby-plugin-react-i18next"

const Header = ({ siteTitle }) => {
  const [isScrolled, setScrolled] = useState(false)
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.addEventListener("scroll", () => {
      let yOffset = window.scrollY
      if (yOffset > 80) {
        setScrolled(true)
      } else if (yOffset < 80) {
        setScrolled(false)
      }
    })
  })

  return (
    <>
      <div className={`pre-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="details">
          <span className="phone">
            <IcomoonReact
              iconSet={iconSet}
              icon="bx-mobile-alt"
              size={20}
              color="#cda35e"
            />
            +9647705344322
          </span>
          <span className="time">
            <IcomoonReact
              iconSet={iconSet}
              icon="bx-time"
              size={20}
              color="#cda35e"
            />
            <Trans>All week: 9:00 AM - 11 PM</Trans>
          </span>
        </div>

        <div className="language">
          <IcomoonReact
            iconSet={iconSet}
            icon="bx-world"
            size={20}
            color="#cda35e"
          />
          <Link to="/">English</Link>/<Link to="/ar">عربي</Link>
        </div>
      </div>
      <header className={`${isScrolled ? "header-scrolled" : ""}`}>
        <article className="wrapper">
          <div className="logo">
            <h1 style={{ margin: 0 }}>
              <Link
                to="#hero"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle.toUpperCase()}
              </Link>
            </h1>
          </div>
          <MobileHeader />
          <nav className="desktop-header-nav">
            <ul className="nav-items">
              <Link className="nav-link" to="#hero">
                <Trans>Home</Trans>
              </Link>
              <Link className="nav-link" to="#specials">
                <Trans>Menu</Trans>
              </Link>
              <Link className="nav-link" to="#contact">
                <Trans>Contact</Trans>
              </Link>
            </ul>
          </nav>
          <Link className="nav-link" to="#reserve">
            <button className="reserve">
              <Trans>Book a Table</Trans>
            </button>
          </Link>
        </article>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
