import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../helpers/ad";
import styles from "./recent.module.css";
import AdFeatures from "./AdFeatures";
import LikeUnlike from "../../misc/LikeUnlike";

const RecentCard = ({ adsForRent }) => {

  return (
    <>
      <div className={`${styles.grid3} ${styles.mtop}`}>
        {adsForRent.map((ad, index) => {
          // console.log(ad);

          const { type, label, title, price } = ad
          return (
            <Link to={`/ad/${ad.slug}`} className={`nav-link ${styles.box}`}>
              <div className={` ${styles.shadow} ${styles.hoverable}`} key={index}>
                <div className={`${styles.img}`}>
                  <img src={ad?.photos?.[0]?.Location} alt='img' className={` ${styles.cardimg}`} />
                </div>
                <div className={`${styles.text}`}>
                  <div
                    className={` ${styles.category} ${styles.flex}`}
                    onClick={(event) => {
                      // Prevent the default click behavior
                      event.preventDefault();
                      // Stop the click event from propagating to parent elements
                      event.stopPropagation();
                      // Add your heart icon click logic here if needed
                      console.log("Heart icon clicked!");

                    }}>
                    <span
                      className={type === "House" ? styles.houseSpan : styles.roomSpan}
                    >
                      {type}
                    </span>

                    <LikeUnlike ad={ad} />
                    {/* <LikeUnlike ad={ad} /> */}
                  </div>
                  <h4>{title}</h4>
                  <p >
                    <i className={`fa fa-location-dot`}></i> {label.split(',', 3).join(', ')}
                  </p>
                </div>
                <div className={`${styles.button} ${styles.flex}`} >
                  <div>
                    <button className={`${styles.btn2} ${styles.btnprice}`}>&#x20B9;{formatNumber(price)}</button>
                  </div>
                  <AdFeatures ad={ad} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard;