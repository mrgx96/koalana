import style from './index.module.css';

const Roadmap = () => {
  return (
    <section id="roadmap" className={style.section}>
      <h2>Roadmap</h2>
      <p>Milestones to hit in 2024 and 2025. Stay connected for updates.</p>
      <ul className={style.roadmap}>
        <li>
          <div>
            <h3>Stage 1</h3>
            <div>
              <ul>
                <li>Setting up the socials</li>
                <li>Token launch</li>
                <li>Community growth</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h3>Stage 2</h3>
            <div>
              <ul>
                <li>Migration to Raydium</li>
                <li>Marketing campaign launch</li>
                <li>Social media presence growth</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h3>Stage 3</h3>
            <div>
              <ul>
                <li>CEX listing</li>
                <li>Increasing marketing efforts</li>
                <li>Memes and community activities</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Roadmap;
