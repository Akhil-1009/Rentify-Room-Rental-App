import React from "react"
import Heading from "../Heading"
import { awards } from "../Data"
import styles from "./awards.module.css"

const Awards = () => {
  return (
    <>
      <section className={styles.awards}>
        <div className={styles.container}>
          <Heading title='Our Awards' subtitle='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' />

          <div className={`${styles.grid4} ${styles.mtop}`}>
            {awards.map((val, index) => (
              // box
              <div className={`box`} key={index}>
                <div className={styles.icon}>
                  <span>{val.icon}</span>
                </div>
                <h1 className={`${styles.changeClr}`}>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards;