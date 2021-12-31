import * as React from "react"
import { Link } from "gatsby"
import "./home.scss"
import Seo from "../components/seo"
import Layout from "../components/layout"
const Home = () => (
  <>
    <Layout>
      <Seo title="Saj Al-reef" />
      <section id="hero" className="d-flex align-items-center">
        <div className="limit-width hero-content">
          <div className="row">
            <div className="col-lg-8">
              <h1>
                Welcome to <span>Restaurantly</span>
              </h1>
              <h2>Delivering great food for more than 18 years!</h2>

              <div className="btns">
                <a href="#menu" className="btn-menu animated fadeInUp scrollto">
                  Our Menu
                </a>
                <a
                  href="#book-a-table"
                  className="btn-book animated fadeInUp scrollto"
                >
                  Book a Table
                </a>
              </div>
            </div>
            <div
              className="play-parent"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <a
                href="https://www.youtube.com/watch?v=GlrxcuEDyF8"
                className="glightbox play-btn"
              ></a>
            </div>
          </div>
        </div>
      </section>
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
