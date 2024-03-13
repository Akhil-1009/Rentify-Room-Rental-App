import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "../../pages/about.module.css";
import aboutImg from "../../images/s2.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className={styles.about__section}
    // style={
    //   aboutClass === "aboutPage"
    //     ? { marginTop: "0px" }
    //     : { marginTop: "280px" }
    //}
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={styles.about__sectioncontent}>
              <h1 className={`${styles.section__subtitle} d-flex justify-content-center align-item-center`}>About Us</h1>
              <h2 className={`${styles.section__title} d-flex justify-content-center align-item-center`}>Welcome to Rentify</h2>
              <p className={styles.section__description}>

                &emsp;&emsp;At Rentify, we believe that finding the perfect place to call home should be a seamless and enjoyable experience. Whether you're a student, a working professional, or someone in search of a temporary abode, we're here to make the process of finding room and house rentals easy, convenient, and stress-free.
              </p>

              <div className={`${styles.about__sectionitem} 
              d-flex align-items-center
              `}>
                <p
                  className={`${styles.section__description} 
                d-flex align-items-center
                gap-2
                `}>
                  {/* <i class="ri-checkbox-circle-line"></i>  */}
                  &emsp;Our mission is to connect individuals with their ideal living spaces, creating a harmonious balance between comfort, affordability, and convenience. We understand that each person's needs are unique, and that's why we've curated a diverse selection of rooms and houses to cater to a variety of preferences and budgets.
                </p>

              </div>

            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={styles.about__img}>
              <img src={aboutImg} alt="" className={`w-100`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;