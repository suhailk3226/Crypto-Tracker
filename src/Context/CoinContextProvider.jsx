import { createContext, useEffect, useState } from 'react';
import inr_icon from '../assets/inr.svg';

export const CoinContext = createContext();

export const fetchFromApi = async (url) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-Sp19Mw9jYgLzPUcoiFPe2X9R',
    },
  };

  const data = await fetch(`https://api.coingecko.com/api/v3/${url}`, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return data;
};
export const CoinContextProvider = ({ children }) => {
  const [allCoin, setAllCoin] = useState([]);
  let [displayCoin, setDisplayCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: 'inr',
    symbol: inr_icon,
  });

  useEffect(() => {
    fetchFromApi(`coins/markets?vs_currency=${currency.name}`).then((data) =>
      setAllCoin(data)
    );
  }, [currency]);

  const coinValue = {
    currency,
    setCurrency,
    allCoin,
    displayCoin,
    setDisplayCoin,
  };
  return (
    <CoinContext.Provider value={coinValue}>{children}</CoinContext.Provider>
  );
};
