import style from './index.module.css';
import tokenomics from '../../assets/png/tokenomics.png';
import Supply from '../supply';

const Tokenomics = () => {
  return (
    <section id="koalanomics" className={style.section}>
      <h2>Koalanomics</h2>
      <div className={style.tokenomics}>
        <img src={tokenomics} className="img-responsive" />
        <Supply />
      </div>
    </section>
  );
};

export default Tokenomics;
