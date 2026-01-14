import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.col}>
          <h4>LOCATION</h4>
          <p>
            2215 John Daniel Drive <br />
            Clark, MO 65243
          </p>
        </div>

        <div className={styles.col}>
          <h4>AROUND THE WEB</h4>
          <div className={styles.icons}>
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-solid fa-globe"></i></a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>ABOUT FREELANCER</h4>
          <p>
            Freelance is a free to use, MIT licensed Bootstrap theme created by{" "}
            <a href="#">Start Bootstrap</a>.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Copyright © Your Website 2023</p>
      </div>
    </footer>
  );
}
