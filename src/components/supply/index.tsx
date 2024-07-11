import ProgressBar from '../progressbar';
import style from './index.module.css';

const Supply = () => {
  return (
    <section className={style.section}>
      <h3>Total Supply: 30,000,000</h3>
      <div className={style.progressBars}>
        <ProgressBar color="#D32B85" label="Marketing" value={50} />
        <ProgressBar color="#FFAD00" label="Lp" value={20} />
        <ProgressBar color="#28B3B4" label="Tax" value={0} />
        <ProgressBar color="#C7FF45" label="Sell" value={0} />
      </div>
    </section>
  );
};

export default Supply;
