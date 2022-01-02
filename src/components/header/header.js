import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.scss"
import iconSet from "../../selection.json"
import IcomoonReact from "icomoon-react"
import { useState, useEffect } from "react"
import MobileHeader from "./mobile-header"

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
            Sun-Sat: 8AM-11PM
          </span>
        </div>

        <div className="language">
          <IcomoonReact
            iconSet={iconSet}
            icon="bx-world"
            size={20}
            color="#cda35e"
          />
          <span>English</span>/<span>عربي</span>
        </div>
      </div>
      <header className={`${isScrolled ? "header-scrolled" : ""}`}>
        <article className="wrapper">
          <div className="logo">
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
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
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="#specials">
                Menu
              </Link>
              <Link className="nav-link" to="#contact">
                Contact
              </Link>
            </ul>
          </nav>
          <Link className="nav-link" to="#reserve">
            <button className="reserve">BOOK A TABLE</button>
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
