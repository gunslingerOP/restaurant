import { Spin as Hamburger } from "hamburger-react"

import * as React from "react"
import { Link } from "gatsby"
import "./header.scss"

import { useState } from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { I18nextContext } from "gatsby-plugin-react-i18next"
const MobileHeader = () => {
  const context = React.useContext(I18nextContext)
  const language = context.language
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="mobile-header">
      <nav className={`mobile-header-nav ${isOpen ? "opened-nav" : ""}`}>
        <Hamburger hideOutline={false} toggled={isOpen} toggle={setOpen} />
        <ul className={`mobile-header-list ${isOpen ? "opened-ul" : ""}`}>
          <li>
            <Link
              onClick={() => setOpen(false)}
              to="#hero"
              activeClassName="active"
            >
              <Trans>Home</Trans>
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setOpen(false)}
              to="#specials"
              activeClassName="active"
            >
              <Trans>Menu</Trans>
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setOpen(false)}
              to="#contact"
              activeClassName="active"
            >
              <Trans>Contact</Trans>
            </Link>
          </li>

          <li>
            <div className="language">
              {language === "en" ? (
                <Link onClick={() => setOpen(false)} to="/ar">
                  عربي
                </Link>
              ) : (
                <Link onClick={() => setOpen(false)} to="/">
                  English
                </Link>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileHeader
