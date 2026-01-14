import style from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={style.area}>
      <a href="#" className={style.logo}>
        START BOOTSTRAP
      </a>

      <ul className={style.icons}>
        <li><a href="#">PORTFOLIO</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
