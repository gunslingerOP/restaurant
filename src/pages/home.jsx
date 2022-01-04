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
import { Trans } from "gatsby-plugin-react-i18next"
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

                  <span>
                    <Trans>Restaurantly</Trans>
                  </span>
                </h1>
                <h2>
                  <Trans>Delivering great food for more than 18 years!</Trans>
                </h2>

                <div className="btns">
                  <a
                    href="#specials"
                    className="btn-menu animated fadeInUp scrollto"
                  >
                    <Trans>Our Menu</Trans>
                  </a>
                  <a
                    href="#reserve"
                    className="btn-book animated fadeInUp scrollto"
                  >
                    <Trans>Book a Table</Trans>
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
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=X_1ITbIN6gw"
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
                <Trans>Title of image section</Trans>
              </h3>
              <p className="fst-italic">
                <Trans>Subtitle of image section</Trans>
              </p>

              <p>
                <Trans>Description of image section</Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us">
        <Fade right>
          <div className="container limit-width" data-aos="fade-up">
            <div className="section-title">
              <h2>
                <Trans>Why Us</Trans>
              </h2>
              <p>
                <Trans>Why Choose Our Restaurant</Trans>
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div
                  className="box aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <span>1</span>
                  <h4>
                    <Trans>First reason</Trans>
                  </h4>
                  <p>
                    <Trans>First reason description</Trans>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0">
                <div
                  className="box aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <span>2</span>
                  <h4>
                    <Trans>Second reason</Trans>
                  </h4>
                  <p>
                    <Trans>Second reason description</Trans>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0">
                <div
                  className="box aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <span>3</span>
                  <h4>
                    {" "}
                    <Trans>Third reason</Trans>
                  </h4>
                  <p>
                    <Trans>Third reason description</Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section id="specials">
        <div className="container limit-width">
          <div className="section-title">
            <h2>
              <Trans>Specials</Trans>
            </h2>
            <p>
              <Trans>Check Our Specials</Trans>
            </p>
          </div>

          <div className="container">
            <Menu></Menu>
          </div>
        </div>
      </section>

      <section id="reserve">
        <Fade left>
          <div className="limit-width">
            <div className="section-title">
              <h2>
                <Trans>Reservation</Trans>
              </h2>
              <p>
                <Trans>Book a Table</Trans>
              </p>
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
                <Trans>CALL US</Trans>
              </a>
            </div>
          </div>
        </Fade>
      </section>

      <section id="contact" className="contact">
        <div className="container limit-width" data-aos="fade-up">
          <div className="section-title">
            <h2>
              <Trans>Contact</Trans>
            </h2>
            <p>
              <Trans>Contact Us</Trans>
            </p>
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
                      <h4>
                        <Trans>Location</Trans>:
                      </h4>
                      <p>
                        <Trans>Baghdad,Al-mansour, 14 Ramadan street</Trans>
                      </p>
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
                      <h4>
                        <Trans>Open Hours</Trans>:
                      </h4>
                      <p>
                        <Trans>All week: 9:00 AM - 12 PM</Trans>
                      </p>
                    </div>
                  </div>

                  <div className="contact-parent">
                    <IcomoonReact
                      iconSet={iconSet}
                      icon="bx-envelope"
                      size={40}
                      color="#cda35e"
                    />{" "}
                    <a href='mailto:<nowiki>agentavery@sample.com?subject="subject text"'>
                      <div className="contact-item">
                        <h4>
                          <Trans>Email</Trans>:
                        </h4>
                        <p>hasanaqeel38@gmail.com</p>
                      </div>
                    </a>
                  </div>

                  <div className="contact-parent">
                    <IcomoonReact
                      iconSet={iconSet}
                      icon="bx-mobile-alt"
                      size={40}
                      color="#cda35e"
                    />{" "}
                    <a href="tel:07705344322">
                      <div className="contact-item">
                        <h4>
                          <Trans>Call</Trans>:
                        </h4>
                        <p>+9647705344322</p>
                      </div>
                    </a>
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
