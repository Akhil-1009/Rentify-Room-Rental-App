import { Link } from 'react-router-dom';
import styles from "./QueContact.module.css";
export const QueContact = () => {
  return (
    <>
      <section className={`  ${styles.footerContact}`}>
        <div className={`  ${styles.container}`}>
          <div className={` send ${styles.flex}`}>
            <div className={`${styles.text}`}>
              <h1>Do You Have Questions ?</h1>
              <p>Feel free to reach out if you have any inquiries or need assistance navigating our room rental web app.</p>
            </div>
            <Link to="/contact" className={`${styles.btn8}`} >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )

}