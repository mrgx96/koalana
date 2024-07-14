import { scrollTo } from '../../utils/common';
import style from './index.module.css';

const Navigation = () => {
  return (
    <nav className={style.section}>
      <div className="container">
        <div className={style.banner}>
          <a href="/" className={style.logo}>
            <img src="/favicon.png" alt="Koalana" />
          </a>
          <ul className={style.menu}>
            <li>
              <a href="#home" onClick={(evt) => scrollTo(evt, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(evt) => scrollTo(evt, 'about')}>
                About
              </a>
            </li>
            <li>
              <a href="#roadmap" onClick={(evt) => scrollTo(evt, 'roadmap')}>
                Roadmap
              </a>
            </li>
            <li>
              <a href="#tokenomics" onClick={(evt) => scrollTo(evt, 'tokenomics')}>
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#presale" onClick={(evt) => scrollTo(evt, 'presale')}>
                Presale
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(evt) => scrollTo(evt, 'contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
