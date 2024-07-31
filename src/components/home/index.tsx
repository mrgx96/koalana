import style from './index.module.css';
import title from '../../assets/png/koalana-title.png';
import solanaTitle from '../../assets/png/solana-title.png';
import Buy from '../buy';

const Home = () => {
  return (
    <div id="home" className={style.section}>
      <img className={[style.title, 'img-responsive'].join(' ')} src={title} alt="Koalana Title" />
      <img className={[style.solana, 'img-responsive'].join(' ')} src={solanaTitle} alt="Koalana Title" />
      <Buy />
    </div>
  );
};

export default Home;
