import style from './index.module.css';
import title from '../../assets/png/koalana-title.png';

const Home = () => {
  return (
    <div className={style.section}>
      <img className={style.title} src={title} alt="Koalana Title" />
    </div>
  );
};

export default Home;
