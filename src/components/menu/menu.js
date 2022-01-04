import React, { useState } from "react"
import "./menu.scss"
import Fade from "react-reveal/Fade"

const Menu = () => {
  const [activeType, setActiveType] = useState("main dishes")
  const menuTypes = ["main dishes", "desserts", "appetizers"]

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
      <article className="tabs">
        {menuTypes.map((item, index) => (
          <div
            onClick={() => toggleTab(item)}
            className={`tab ${activeType === item ? "active-menu" : ""}`}
            key={index}
          >
            {item}
          </div>
        ))}
      </article>

      <article className="menu-items">
        {menuItems.map((item, index) =>
          item.type === activeType ? (
            <Fade key={index} top duration={1000}>
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
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ) : null
        )}
      </article>
    </section>
  )
}

export default Menu
