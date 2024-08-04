import style from './index.module.css';
import about from '../../assets/png/about.png';

const About = () => {
  return (
    <section id="about" className={style.section}>
      <div className={style.contentBorder}>
        <div className={style.content}>
          <div>
            <img className="img-responsive" src={about} alt="About" />
          </div>
          <div>
            <div className={style.description}>
              <h2>About</h2>
              <p>The first, coolest and most successful Koala on Solana.</p>
              <p>
                Koalana's mission is to journey to the moon and take as many people as possible with him, so buckle up
                and enjoy the ride!
              </p>
              <p>
                The only contract address: 4oykvuyVrL6hb4mizuAeNfyYZK6J7aR6Ps4NJvqcy5Dz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
