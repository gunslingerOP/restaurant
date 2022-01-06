import React from "react"
import "./menu.scss"
import Zoom from "react-reveal/Zoom"
import { Trans } from "gatsby-plugin-react-i18next"
import { useState, useEffect } from "react"

const Menu = () => {
  const [activeType, setActiveType] = useState("main dishes")
  const [activeTabs, setActiveTabs] = useState(false)

  const menuTypes = ["main dishes", "desserts", "appetizers"]
  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.addEventListener("scroll", function () {
      // eslint-disable-next-line no-undef
      let yOffset = this.window.scrollY
      let deviceWidth = this.window.innerWidth
      if (yOffset > 2314 && deviceWidth < 900) {
        setActiveTabs(true)
      } else if (yOffset > 1750 && deviceWidth > 900) {
        setActiveTabs(true)
      } else {
        setActiveTabs(false)
      }
    })
  })
  const menuItems = [
    {
      name: "Saj",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "main dishes",
    },
    {
      name: "Saj",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "main dishes",
    },
    {
      name: "Saj",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "main dishes",
    },
    {
      name: "Saj",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "main dishes",
    },
    {
      name: "Saj 2",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "main dishes",
    },
    {
      name: "Saj 3",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "main dishes",
    },

    {
      name: "Saj a",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "appetizers",
    },
    {
      name: "Saj a",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "appetizers",
    },
    {
      name: "Saj a",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "appetizers",
    },
    {
      name: "Saj a",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "appetizers",
    },
    {
      name: "Saj a",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "appetizers",
    },
    {
      name: "Saj a2",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "appetizers",
    },
    {
      name: "Saj a3",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "appetizers",
    },

    {
      name: "Saj d",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "desserts",
    },
    {
      name: "Saj d",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "desserts",
    },
    {
      name: "Saj d",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "desserts",
    },
    {
      name: "Saj d",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "desserts",
    },
    {
      name: "Saj d",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "desserts",
    },
    {
      name: "Saj d",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "desserts",
    },
    {
      name: "Saj d2",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "desserts",
    },
    {
      name: "Saj d3",
      description: "Shwarma sandwich made with love",
      price: "IQD 6,000",
      image: "item2.jpg",
      type: "desserts",
    },
  ]

  const toggleTab = index => {
    setActiveType(index)
  }

  return (
    <section className="menu">
      <article
        id="menu-tab"
        className={`${activeTabs ? "sticky-menu" : ""} tabs`}
      >
        {menuTypes.map((item, index) => (
          <div
            onClick={() => toggleTab(item)}
            className={`tab ${activeType === item ? "active-menu" : ""}`}
            key={index}
          >
            <Trans>{item}</Trans>
          </div>
        ))}
      </article>

      <article className="menu-items">
        {menuItems.map((item, index) =>
          item.type === activeType ? (
            <Zoom key={index} duration={500}>
              <div key={index} className="menu-item">
                <div className="item-container">
                  <div className="img-container">
                    <img
                      src={item.image}
                      alt="buttermilk pancakes"
                      className="photo"
                    />
                    <div className="item-info">
                      <main>
                        <h4 className="name">{item.name}</h4>
                        <h4 className="price">{item.price}</h4>
                      </main>
                      <p className="item-text">{item.description}</p>
                      <button className="btn-reserve order">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="//api.whatsapp.com/send?phone=9647705344322&text=I want to order"
                        >
                          <Trans>order</Trans>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          ) : null
        )}
      </article>
    </section>
  )
}

export default Menu
