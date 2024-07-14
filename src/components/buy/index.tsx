import style from './index.module.css';
import koalana from '../../assets/png/koalana.png';
import { useEffect, useState } from 'react';
import { config } from '../../utils/config';

const address = import.meta.env.VITE_WALLET_ADDRESS;

const Buy = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [balance, setBalance] = useState<string>('');

  const getSolanaBalance = async () => {
    fetch(`https://solana-balance-express.vercel.app/${address}`)
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.solana || '0');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const doubleDigit = (v: number) => (v < 10 ? `0${v}` : v);

  useEffect(() => {
    const timerId = setInterval(() => {
      const saleDateUntil = new Date(import.meta.env.VITE_SALE_DATE_UNTIL).getTime();
      const saleDateSince = new Date(import.meta.env.VITE_SALE_DATE_SINCE).getTime();
      const now = new Date().getTime();
      const distance = saleDateUntil - (now < saleDateSince ? saleDateSince : now);
      if (distance > 0) {
        const days = config.isPaused ? config.leftTime.days : Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = config.isPaused ? config.leftTime.hours : Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = config.isPaused ? config.leftTime.minutes : Math.floor((distance / (1000 * 60)) % 60);
        const seconds = config.isPaused ? config.leftTime.seconds : Math.floor((distance / 1000) % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    getSolanaBalance();
    return () => clearInterval(timerId);
  }, []);

  return (
    <section className={style.section}>
      <img src={koalana} />
      <section id="presale" className={style.widget}>
        <div className={style.title}>
          BUY NOW BEFORE
          <small>The Price Increase!</small>
        </div>
        <div className={style.body}>
          <ul>
            <li>
              <small>days</small>
              <span>{doubleDigit(days)}</span>
            </li>
            <li>
              <small>hours</small>
              <span>{doubleDigit(hours)}</span>
            </li>
            <li>
              <small>minutes</small>
              <span>{doubleDigit(minutes)}</span>
            </li>
            <li>
              <small>seconds</small>
              <span>{doubleDigit(seconds)}</span>
            </li>
          </ul>
          <h2>Total Sol Raised</h2>
          <h3>SOL {Number(balance).toLocaleString()}</h3>
          <a className={style.button}>Buy</a>
        </div>
      </section>
    </section>
  );
};

export default Buy;
