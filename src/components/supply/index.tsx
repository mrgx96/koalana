import ProgressBar from '../progressbar';
import style from './index.module.css';

const Supply = () => {
  return (
    <section className={style.section}>
      <h3>Total Supply: 1 billion</h3>
      <div className={style.progressBars}>
        <ProgressBar color="#D32B85" label="100% community token created on pump.fun" value={100} />
        {/* <ProgressBar color="#FFAD00" label="150M-200M tokens burned for a deflationary boost" value={20} /> */}
        <ProgressBar color="#28b3b4" label="All liquidity is locked by burning the LP token" value={100} />
      </div>
    </section>
  );
};

export default Supply;
