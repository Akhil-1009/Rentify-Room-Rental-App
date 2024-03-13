import React from "react";

import CommonSection from "../components/about/CommonSection";
import AboutSection from "../components/about/AboutSection";
import { Container, Row, Col } from "reactstrap";
import roomimg from "../images/s1.jpg";
import OurMembers from "../components/about/OurMembers";
import styles from "./about.module.css";
import { ScrollToTop } from "../components/misc/ScrollToTop";
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <>
      <ScrollToTop />
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className={`${styles.about__pagesection}`}>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className={`${styles.about__pageimg}`}>
                <img src={roomimg} alt="img" className={`w-100 rounded-3`} />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className={`${styles.about__pagecontent}`}>
                <h2 className={`${styles.section__title}`}>
                  We Are Committed To Provide Nice and Affordable Rooms and Houses for Rent
                </h2>

                <p className={`${styles.section__description}`}>
                  &emsp;&emsp;At Rentify, our commitment to providing nice and affordable rooms and houses for rent goes beyond the transactional. We believe that everyone deserves a space that not only fits their budget but also feels like a sanctuary.
                </p>

                <p className={`${styles.section__description}`}>
                  &emsp;Our carefully curated selection of accommodations reflects our dedication to offering quality living experiences without compromise. We understand that the concept of "home" extends far beyond the physical structure—it's about comfort, warmth, and a place to create lasting memories.
                </p>

                <div className={` d-flex align-items-center gap-3 mt-5 justify-content-center`}>


                  <div>
                    <Link to="/contact" className={`${styles.btn5}  ${styles.myComponent}`} >
                      Contact Us Today
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row className={`d-flex justify-content-center`}>
            <Col lg="12" className={`mb-5 text-center`}>
              <h6 className={styles.section__subtitle}>Experts</h6>
              <h2 className={styles.section__title}>Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;