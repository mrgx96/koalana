import style from './index.module.css';
import tokenomics from '../../assets/png/tokenomics.png';
import Supply from '../supply';

const Tokenomics = () => {
  return (
    <section id="koalanomics" className={style.section}>
      <h2>Koalanomics</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy.
      </p>
      <div className={style.tokenomics}>
        <img src={tokenomics} className="img-responsive" />
        <Supply />
      </div>
    </section>
  );
};

export default Tokenomics;
