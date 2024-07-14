import style from './index.module.css';
import title from '../../assets/png/koalana-title.png';
import Buy from '../buy';

const Home = () => {
  return (
    <div id="home" className={style.section}>
      <img className={style.title} src={title} alt="Koalana Title" />
      <Buy />
    </div>
  );
};

export default Home;
