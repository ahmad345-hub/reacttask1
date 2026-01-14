import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>ABOUT</h2>

      <div className={styles.divider}>
        <span></span>
        <i className="fa-solid fa-star"></i>
        <span></span>
      </div>

      <div className={styles.content}>
        <p>
          Freelancer is a free bootstrap theme created by Start Bootstrap.
          The download includes the complete source files including HTML,
          CSS, and JavaScript as well as optional SASS stylesheets for easy
          customization.
        </p>

        <p>
          You can create your own custom avatar for the masthead, change
          the icon in the dividers, and add your email address to the
          contact form to make it fully functional!
        </p>
      </div>

      <button className={styles.btn}>
        <i className="fa-solid fa-download"></i>
        Free Download!
      </button>
    </section>
  );
}
