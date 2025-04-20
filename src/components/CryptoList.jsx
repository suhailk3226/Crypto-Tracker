import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CoinContext } from '../Context/CoinContextProvider';

import '../index.css';

const CryptoList = () => {
  const { allCoin, currency, displayCoin, setDisplayCoin } =
    useContext(CoinContext);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  // console.log(displayCoin);

  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="box grid text-white w-xl mx-auto text-sm border-b pb-2">
        <p className="font-semibold">#</p>
        <p className="font-semibold">Coin</p>
        <p className="font-semibold">Price</p>
        <p className="font-semibold place-self-center">24Hr Change</p>
        {/* <p className="place-self-center font-semibold">Market Cap</p> */}
      </div>
      <div className="h-[60vh] md:h-[40vh] md:overflow-y-auto">
        {displayCoin.slice(0, 15).map((item, idx) => (
          <Link
            key={idx}
            to={`/coin/${item.id}`}
            className="box grid font-semibold text-white w-xl mx-auto text-sm pb-2 py-3"
          >
            <p className="">{item.market_cap_rank}</p>
            <p className="flex items-center">
              <img src={item.image} alt="" className="w-5 mr-2" />
              {item.name} {'-'} {item.symbol}
            </p>
            <div className="flex items-center gap-1">
              <img src={currency.symbol} alt="" className="text-white w-3" />{' '}
              <p>{item.current_price}</p>
            </div>
            <p
              className={`place-self-center ${
                item.price_change_percentage_24h > 0
                  ? 'text-green-700'
                  : 'text-red-600'
              }`}
            >
              {item.price_change_percentage_24h}
            </p>
            {/* <p className="">{item.market_cap}</p> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;
