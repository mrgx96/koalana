import style from './index.module.css';

interface ProgressBarProps {
  color: string;
  label: string;
  value: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { color, label, value } = props;
  return (
    <section className={style.section}>
      <div className={style.progressBar}>
        <span style={{ backgroundColor: color }} />
        <span style={{ backgroundColor: color, right: `${100 - value}%` }} />
      </div>
      <div className={style.description}>
<<<<<<< HEAD
        {label}
        {/* : {value}% */}
=======
        {label}: {value}%
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
      </div>
    </section>
  );
};

export default ProgressBar;
