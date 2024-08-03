import { scrollTo } from '../../utils/common';
import { urls } from '../../utils/config';
import coingecko from '../../assets/png/coingecko.png';
import dexscreener from '../../assets/png/dexscreener.png';
import dextools from '../../assets/png/dextools.png';
import instagram from '../../assets/png/instagram.png';
import style from './index.module.css';
import telegram from '../../assets/png/telegram.png';
import twitter from '../../assets/png/x.png';

const Footer = () => {
  return (
    <footer id="contact" className={style.section}>
      <h2>We're committed to creating value for our community</h2>
      <p>
        Koalana is a community driven project and focuses on creating value for the community members first and
        foremost. Stay up to date with our latest news and milestones achievements by following our social channels
        below
      </p>
      <ul>
        <li>
          <a href={urls.instagram}>
            <span className={style.comingSoon}>
              <img src={instagram} width={48} />
            </span>
            instagram
          </a>
        </li>
        <li>
          <a href={urls.coingecko}>
            <span className={style.comingSoon}>
              <img src={coingecko} width={48} />
            </span>
            coingecko
          </a>
        </li>
        <li>
          <a href={urls.twitter}>
            <span>
              <img src={twitter} width={48} />
            </span>
            twitter
          </a>
        </li>
        <li>
          <a href={urls.telegram}>
            <span>
              <img src={telegram} width={48} />
            </span>
            telegram
          </a>
        </li>
        <li>
          <a href={urls.dextools}>
            <span className={style.comingSoon}>
              <img src={dextools} width={48} />
            </span>
            dextools
          </a>
        </li>
        <li>
          <a href={urls.dexscreener}>
            <span className={style.comingSoon}>
              <img src={dexscreener} width={48} />
            </span>
            dexscreener
          </a>
        </li>
      </ul>
      <ul>
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
          <a href="#koalanomics" onClick={(evt) => scrollTo(evt, 'koalanomics')}>
            Koalanomics
          </a>
        </li>
        {/* <li>
          <a href="#presale" onClick={(evt) => scrollTo(evt, 'presale')}>
            Presale
          </a>
        </li> */}
      </ul>
      <p>&copy; Copyright 2024, All Rights Reserved by Koalana</p>
    </footer>
  );
};

export default Footer;
