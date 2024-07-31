import { coins, config } from '../../utils/config';
<<<<<<< HEAD
import { useCallback, useEffect, useState } from 'react';
import koalana from '../../assets/png/koalana.png';
=======
import { ThreeDots } from 'react-loader-spinner';
import { useCallback, useEffect, useState } from 'react';
import koalana from '../../assets/png/koalana.png';
import logo from '../../assets/png/favicon.png';
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
import style from './index.module.css';

const address = import.meta.env.VITE_WALLET_ADDRESS;

const Buy = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [balance, setBalance] = useState<string>('');
  const [network, setNetwork] = useState(coins.networks[0]);
  const [cryptocurrency, setCryptocurrency] = useState(coins.networks[0].cryptocurrencies[0]);
  const [loading, setLoading] = useState(false);

  const getSolanaBalance = useCallback(async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(`https://solana-balance-express.vercel.app/${address}`)
      .then((response) => response.json())
      .then((data) => {
        setBalance(data.solanaInUSD || '0');
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [loading, setLoading]);

  const doubleDigit = (v: number) => (v < 10 ? `0${v}` : v);

  const handleUpdateTimer = () => {
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
    }
    return distance;
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      if (handleUpdateTimer() <= 0) {
        clearInterval(timerId);
      }
    }, 1000);
    handleUpdateTimer();
    getSolanaBalance();
    return () => clearInterval(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={style.section}>
      <img src={koalana} className="img-responsive" />
<<<<<<< HEAD
      {/* <section id="presale" className={style.widget}>
=======
      <section id="presale" className={style.widget}>
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
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
          {loading ? <ThreeDots /> : <h3>$ {Number(balance).toLocaleString()}</h3>}
        </div>
        <div>
          <ul className={style.network}>
            {coins.networks.map((net) => (
              <li
                key={`net-${net.id}`}
                className={net.id === network.id ? style.selected : undefined}
                onClick={() => {
                  setNetwork(net);
                  setCryptocurrency(net.cryptocurrencies[0]);
                }}
                style={{ minWidth: `${100 / coins.networks.length}%` }}
              >
                <img src={net.image} />
                <span>{net.name}</span>
              </li>
            ))}
          </ul>
          {network?.cryptocurrencies.length > 1 && (
            <ul className={style.cryptocurrency}>
              {network?.cryptocurrencies.map((cc) => (
                <li
                  key={`net-${network}-cryptocurrency-${cc.id}`}
                  className={cc.id === cryptocurrency.id ? style.selected : undefined}
                  onClick={() => {
                    setCryptocurrency(cc);
                  }}
                  style={{ minWidth: `${100 / network.cryptocurrencies.length}%` }}
                >
                  <img src={cc.image} />
                  <span>{cc.name}</span>
                </li>
              ))}
            </ul>
          )}
          <div className={style.form}>
            <div className={style.pay}>
              <label htmlFor="pay-amount">{cryptocurrency.name} you pay</label>
              <input type="number" id="pay-amount" name="pay" />
              {cryptocurrency && <img src={cryptocurrency?.image} />}
            </div>
            <div className={style.receive}>
              <label htmlFor="receive-amount">Koalana you receive</label>
              <input type="number" id="receive-amount" name="receive" />
              <img src={logo} />
            </div>
          </div>
          <a className={style.button}>Buy</a>
        </div>
<<<<<<< HEAD
      </section> */}
=======
      </section>
>>>>>>> f050d5828710001133bf35a21f4fc3018960039c
    </section>
  );
};

export default Buy;
