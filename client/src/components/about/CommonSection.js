import React from "react";
import { Container } from "reactstrap";
import styles from "./common-section.module.css";

const CommonSection = ({ title, subtitle }) => {
  return (
    <section className={`${styles.common__section}`}>
      <Container className={`text-center`}>
        <h1 className={`text-light`}>{title}</h1>
        <h5 className={`${styles.customStyles}`}>{subtitle}</h5>
      </Container>
    </section>
  );
};

export default CommonSection;