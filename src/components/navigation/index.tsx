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
              <a href="">Home</a>
            </li>
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
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
