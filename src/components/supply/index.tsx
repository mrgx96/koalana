import ProgressBar from '../progressbar';
import style from './index.module.css';

const Supply = () => {
  return (
    <section className={style.section}>
<<<<<<< HEAD
      <h3>Total Supply: 1 billion</h3>
      <div className={style.progressBars}>
        <ProgressBar color="#D32B85" label="100% community token created on moonshot" value={50} />
        <ProgressBar color="#FFAD00" label="150M-200M tokens burned for a deflationary boost" value={20} />
        <ProgressBar color="#28b3b4" label="All liquidity is locked by burning the LP token" value={30} />
=======
      <h3>Total Supply: 30,000,000</h3>
      <div className={style.progressBars}>
        <ProgressBar color="#D32B85" label="Marketing" value={50} />
        <ProgressBar color="#FFAD00" label="Lp" value={20} />
        <ProgressBar color="#28B3B4" label="Tax" value={0} />
        <ProgressBar color="#C7FF45" label="Sell" value={0} />
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
      </div>
    </section>
  );
};

export default Supply;
