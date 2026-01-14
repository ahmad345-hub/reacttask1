import React from 'react';
import style from './Hero.module.css';
import avatar from './../assets/images/avataaars.svg'; 

export default function Hero() {
  return (
    <section className={style.hero}>
      <img src={avatar} alt="avatar" className={style.avatar} />

      <h1 className={style.title}>START BOOTSTRAP</h1>

      <div className={style.divider}>
        <span></span>
        <i className="fa-solid fa-star"></i>
        <span></span>
      </div>

      <p className={style.text}>
        Graphic Artist - Web Designer - Illustrator
      </p>
    </section>
  );
}
