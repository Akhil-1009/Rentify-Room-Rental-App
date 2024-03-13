import React from "react"
import styles from "./recent.module.css"
import RecentCard from "./RecentCard"

const Recent = ({ adsForRent }) => {
  return (
    <>
      <section className={`${styles.recent} ${styles.padding}`} >
        <div className='container'>
          <div className={styles.heading}>
            <h1>Recently Listed Property</h1>
            <p>Discover the newest properties on the market, meticulously curated to provide you with a fresh selection of homes that embody modern design, comfort, and desirable locations.</p>
          </div>

          <RecentCard adsForRent={adsForRent} />

        </div>
      </section>
    </>
  )
}

export default Recent;