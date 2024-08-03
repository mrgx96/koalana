import bitcoin from '../assets/png/coins/bitcoin.png';
import bnb from '../assets/png/coins/bnb.png';
import eth from '../assets/png/coins/ethereum.png';
import sol from '../assets/png/coins/sol.png';
import usdc from '../assets/png/coins/usdc.png';
import usdt from '../assets/png/coins/usdt.png';

export const urls = {
  instagram: 'https://',
  coingecko: 'https://',
  twitter: 'https://x.com/koalana_sol',
  telegram: 'https://t.me/koalanasol',
  dextools: 'https://',
  dexscreener: 'https://',
};

export const config = {
  isPaused: false,
  leftTime: {
    days: 45,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
};

interface CoinsProps {
  usdPerKoalana: number;
  networks: Array<{
    id: string;
    name: string;
    image: string;
    cryptocurrencies: Array<{
      id: string;
      name: string;
      image: string;
      address?: string;
    }>;
  }>;
}

export const coins: CoinsProps = {
  usdPerKoalana: 0.00114,
  networks: [
    {
      id: 'bitcoin',
      name: 'BITCOIN',
      image: bitcoin,
      cryptocurrencies: [
        {
          id: 'bitcoin',
          name: 'BITCOIN',
          image: bitcoin,
        },
      ],
    },
    {
      id: 'eth',
      name: 'ETH',
      image: eth,
      cryptocurrencies: [
        {
          id: 'eth',
          name: 'ETH',
          image: eth,
        },
        {
          id: 'usdt',
          name: 'USDT',
          image: usdt,
        },
        {
          id: 'usdc',
          name: 'USDC',
          image: usdc,
        },
      ],
    },
    {
      id: 'bnb',
      name: 'BNB',
      image: bnb,
      cryptocurrencies: [
        {
          id: 'bnb',
          name: 'BNB',
          image: bnb,
        },
        {
          id: 'usdt',
          name: 'USDT',
          image: usdt,
        },
        {
          id: 'usdc',
          name: 'USDC',
          image: usdc,
        },
      ],
    },
    {
      id: 'sol',
      name: 'SOL',
      image: sol,
      cryptocurrencies: [
        {
          id: 'sol',
          name: 'SOL',
          image: sol,
        },
        {
          id: 'usdt',
          name: 'USDT',
          image: usdt,
        },
        {
          id: 'usdc',
          name: 'USDC',
          image: usdc,
        },
      ],
    },
  ],
};
