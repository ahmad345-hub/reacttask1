import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>CONTACT ME</h2>

      <div className={styles.divider}>
        <span></span>
        <i className="fa-solid fa-star"></i>
        <span></span>
      </div>

      <form className={styles.form}>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email address" />
        <input type="tel" placeholder="Phone number" />
        <textarea placeholder="Message"></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
