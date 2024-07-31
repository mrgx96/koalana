import style from './index.module.css';
import title from '../../assets/png/koalana-title.png';
<<<<<<< HEAD
import solanaTitle from '../../assets/png/solana-title.png';
=======
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
import Buy from '../buy';

const Home = () => {
  return (
    <div id="home" className={style.section}>
      <img className={[style.title, 'img-responsive'].join(' ')} src={title} alt="Koalana Title" />
<<<<<<< HEAD
      <img className={[style.solana, 'img-responsive'].join(' ')} src={solanaTitle} alt="Koalana Title" />
=======
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
      <Buy />
    </div>
  );
};

export default Home;
