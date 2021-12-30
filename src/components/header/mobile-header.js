import { Spin as Hamburger } from "hamburger-react"

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.scss"
import iconSet from "../../selection.json"
import IcomoonReact from "icomoon-react"
import { useState, useEffect } from "react"

const MobileHeader = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false)
  function handleNav(el) {
    console.log("EL", el)
  }

  function burgerToggle(toggled) {
    if (toggled) {
    } else {
    }
  }

  return (
    <div className="mobile-header">
      <nav className={`mobile-header-nav ${isOpen ? "opened-nav" : ""}`}>
        <Hamburger
          onToggle={burgerToggle}
          hideOutline={false}
          toggled={isOpen}
          toggle={setOpen}
        />
        <ul className={`mobile-header-list ${isOpen ? "opened-ul" : ""}`}>
          <li>
            <Link
              to="/"
              activeClassName="active"
              onClick={el => handleNav(el.target)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/menu"
              activeClassName="active"
              onClick={el => handleNav(el.target)}
            >
              Menu
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              activeClassName="active"
              onClick={el => handleNav(el.target)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileHeader
