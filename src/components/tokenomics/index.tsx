import style from './index.module.css';
import tokenomics from '../../assets/png/tokenomics.png';
import Supply from '../supply';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className={style.section}>
      <h2>Tokenomics</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy.
      </p>
      <div className={style.tokenomics}>
        <img src={tokenomics} />
        <Supply />
      </div>
    </section>
  );
};

export default Tokenomics;
