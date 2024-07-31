import { scrollTo } from '../../utils/common';
import { urls } from '../../utils/config';
import coingecko from '../../assets/png/coingecko.png';
import dexscreener from '../../assets/png/dexscreener.png';
import dextools from '../../assets/png/dextools.png';
import instagram from '../../assets/png/instagram.png';
import style from './index.module.css';
import telegram from '../../assets/png/telegram.png';
<<<<<<< HEAD
import twitter from '../../assets/png/x.png';
=======
import twitter from '../../assets/png/twitter.png';
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c

const Footer = () => {
  return (
    <footer id="contact" className={style.section}>
      <h2>We're committed to creating value for our community</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy.
      </p>
      <ul>
        <li>
          <a href={urls.instagram}>
            <span>
<<<<<<< HEAD
              <img src={instagram} width={48} />
=======
              <img src={instagram} />
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
            </span>
            instagram
          </a>
        </li>
        <li>
          <a href={urls.coingecko}>
            <span>
<<<<<<< HEAD
              <img src={coingecko} width={48} />
=======
              <img src={coingecko} />
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
            </span>
            coingecko
          </a>
        </li>
        <li>
          <a href={urls.twitter}>
            <span>
<<<<<<< HEAD
              <img src={twitter} width={48} />
=======
              <img src={twitter} />
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
            </span>
            twitter
          </a>
        </li>
        <li>
          <a href={urls.telegram}>
            <span>
<<<<<<< HEAD
              <img src={telegram} width={48} />
=======
              <img src={telegram} />
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
            </span>
            telegram
          </a>
        </li>
        <li>
          <a href={urls.dextools}>
            <span>
<<<<<<< HEAD
              <img src={dextools} width={48} />
=======
              <img src={dextools} />
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
            </span>
            dextools
          </a>
        </li>
        <li>
          <a href={urls.dexscreener}>
            <span>
<<<<<<< HEAD
              <img src={dexscreener} width={48} />
=======
              <img src={dexscreener} />
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
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
          <a href="#tokenomics" onClick={(evt) => scrollTo(evt, 'tokenomics')}>
            Tokenomics
          </a>
        </li>
<<<<<<< HEAD
        {/* <li>
          <a href="#presale" onClick={(evt) => scrollTo(evt, 'presale')}>
            Presale
          </a>
        </li> */}
=======
        <li>
          <a href="#presale" onClick={(evt) => scrollTo(evt, 'presale')}>
            Presale
          </a>
        </li>
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
      </ul>
      <p>&copy; Copyright 2024, All Rights Reserved by Koalana</p>
    </footer>
  );
};

export default Footer;
