import style from './index.module.css';
import instagram from '../../assets/png/instagram.png';
import coingecko from '../../assets/png/coingecko.png';
import twitter from '../../assets/png/twitter.png';
import telegram from '../../assets/png/telegram.png';
import dextools from '../../assets/png/dextools.png';
import dexscreener from '../../assets/png/dexscreener.png';

const Footer = () => {
  return (
    <footer className={style.section}>
      <h2>We're committed to creating value for our community</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy.
      </p>
      <ul>
        <li>
          <a href="">
            <span>
              <img src={instagram} />
            </span>
            instagram
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <img src={coingecko} />
            </span>
            coingecko
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <img src={twitter} />
            </span>
            twitter
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <img src={telegram} />
            </span>
            telegram
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <img src={dextools} />
            </span>
            dextools
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <img src={dexscreener} />
            </span>
            dexscreener
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Roadmap</a>
        </li>
        <li>
          <a href="">Tokenomics</a>
        </li>
        <li>
          <a href="">Presale</a>
        </li>
      </ul>
      <p>&copy; Copyright 2024, All Rights Reserved by Koalana</p>
    </footer>
  );
};

export default Footer;
