import React from "react"
import styles from "./heading.module.css"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className={styles.heading}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading