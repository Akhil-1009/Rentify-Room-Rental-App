import React from "react"
import Heading from "../Heading";
import styles from "./hero.module.css"
import SearchForm from "../../forms/SearchForms";

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Heading title='Your One-Stop Destination for All Your Rental Room Needs' subtitle='Find new & featured property located in your local city.' />

          <SearchForm />
        </div>
      </section>
    </>
  )
}

export default Hero;