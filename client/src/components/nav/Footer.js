import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>

      <div className={`${styles.footer}`}>
        <h4 className={`mt-4`}>Rentify App - Rent Properties</h4>
        <p className={`mt-3`}>
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
        <p>Rentify.com</p>
      </div>
    </>

  );
}
