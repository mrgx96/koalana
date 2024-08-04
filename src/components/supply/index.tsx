import ProgressBar from '../progressbar';
import style from './index.module.css';

const Supply = () => {
  return (
    <section className={style.section}>
      <h3>Total Supply: 1 billion</h3>
      <div className={style.progressBars}>
        <ProgressBar color="#D32B85" label="100% community token created on pump.fun" value={100} />
        <ProgressBar color="#28b3b4" label="All liquidity is locked by burning the LP token" value={100} />
        <ProgressBar color="#FFAD00" label="Team + Marketing" value={12} />
      </div>
      <ul>
        <li>buy tax = 0%</li>
        <li>sell tax = 0%</li>
        <li>minting = revoked</li>
      </ul>
    </section>
  );
};

export default Supply;
