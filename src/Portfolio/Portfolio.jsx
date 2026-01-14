import style from './Portfolio.module.css';

import img1 from './../assets/images/cabin.png';
import img2 from './../assets/images/cake.png';
import img3 from './../assets/images/circus.png';
import img4 from './../assets/images/game.png';
import img5 from './../assets/images/safe.png';
import img6 from './../assets/images/submarine.png';

function Portfolio() {
  return (
    <section className={style.portfolio}>
      <h2 className={style.title}>PORTFOLIO</h2>

      <div className={style.divider}>
        <span></span>
        <i className="fa-solid fa-star"></i>
        <span></span>
      </div>

      <div className={style.grid}>
        <img src={img1} alt="portfolio" />
        <img src={img2} alt="portfolio" />
        <img src={img3} alt="portfolio" />
        <img src={img4} alt="portfolio" />
        <img src={img5} alt="portfolio" />
        <img src={img6} alt="portfolio" />
      </div>
    </section>
  );
}

export default Portfolio;
