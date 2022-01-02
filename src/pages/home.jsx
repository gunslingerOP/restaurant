import * as React from "react"
import "./home.scss"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import about from "../images/about.jpg"
import IcomoonReact from "icomoon-react"
import iconSet from "../selection.json"
import Menu from "../components/menu/menu"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
const Home = () => (
  <>
    <Layout>
      <Seo title="Saj Al-reef" />
      <section id="hero" className="d-flex align-items-center">
        <div className="limit-width hero-content">
          <div className="row">
            <Zoom>
              <div className="col-lg-8">
                <h1>
                  <Trans>Welcome to</Trans>

                  <span>Restaurantly</span>
                </h1>
                <h2>Delivering great food for more than 18 years!</h2>

                <div className="btns">
                  <a
                    href="#specials"
                    className="btn-menu animated fadeInUp scrollto"
                  >
                    Our Menu
                  </a>
                  <a
                    href="#reserve"
                    className="btn-book animated fadeInUp scrollto"
                  >
                    Book a Table
                  </a>
                </div>
              </div>
            </Zoom>
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
      <section id="about" className="about">
        <div className="container ">
          <div className="row">
            <Zoom>
              <div>
                <div className="about-img">
                  <img src={about} alt="" />
                </div>
              </div>
            </Zoom>
            <div className=" content">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us">
        <Fade right>
          <div className="container limit-width" data-aos="fade-up">
            <div className="section-title">
              <h2>Why Us</h2>
              <p>Why Choose Our Restaurant</p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div
                  className="box aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <span>01</span>
                  <h4>Lorem Ipsum</h4>
                  <p>
                    Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                    consectetur ducimus vero placeat
                  </p>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0">
                <div
                  className="box aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <span>02</span>
                  <h4>Repellat Nihil</h4>
                  <p>
                    Dolorem est fugiat occaecati voluptate velit esse. Dicta
                    veritatis dolor quod et vel dire leno para dest
                  </p>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0">
                <div
                  className="box aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <span>03</span>
                  <h4> Ad ad velit qui</h4>
                  <p>
                    Molestiae officiis omnis illo asperiores. Aut doloribus
                    vitae sunt debitis quo vel nam quis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section id="reserve">
        <Fade left>
          <div className="limit-width">
            <div className="section-title">
              <h2>Reservation</h2>
              <p>Book a Table</p>
            </div>

            <div className="call-us">
              <div className="call-us-number">
                <IcomoonReact
                  iconSet={iconSet}
                  icon="bx-phone"
                  size={40}
                  color="#cda35e"
                />
                <div className="phone-number">+9647705344322</div>
              </div>

              <a href="tel:07705344322" className="btn-reserve">
                CALL US
              </a>
            </div>
          </div>
        </Fade>
      </section>

      <section id="specials">
        <div className="container limit-width">
          <div className="section-title">
            <h2>Specials</h2>
            <p>Check Our Specials</p>
          </div>

          <div className="container">
            <Menu></Menu>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container limit-width" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="container limit-width" data-aos="fade-up">
          <Fade right>
            <div className="row mt-5">
              <div>
                <div className="info">
                  <div className="contact-parent">
                    <IcomoonReact
                      iconSet={iconSet}
                      icon="bx-map"
                      size={40}
                      color="#cda35e"
                    />
                    <div className="contact-item">
                      <h4>Location:</h4>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>

                  <div className="contact-parent">
                    <IcomoonReact
                      iconSet={iconSet}
                      icon="bx-time-five"
                      size={40}
                      color="#cda35e"
                    />
                    <div className="contact-item">
                      <h4>Open Hours:</h4>
                      <p>Monday-Saturday: 11:00 AM - 2300 PM</p>
                    </div>
                  </div>

                  <div className="contact-parent">
                    <IcomoonReact
                      iconSet={iconSet}
                      icon="bx-envelope"
                      size={40}
                      color="#cda35e"
                    />{" "}
                    <div className="contact-item">
                      <h4>Email:</h4>
                      <p>info@example.com</p>
                    </div>
                  </div>

                  <div className="contact-parent">
                    <IcomoonReact
                      iconSet={iconSet}
                      icon="bx-mobile-alt"
                      size={40}
                      color="#cda35e"
                    />{" "}
                    <div className="contact-item">
                      <h4>Call:</h4>
                      <p>+1 5589 55488 55s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Layout>
  </>
)

export default Home
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
