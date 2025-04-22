import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext, fetchFromApi } from '../Context/CoinContextProvider';
import LineChart from '../components/LineChart';

const Coin = () => {
  const [coinData, setCoinData] = useState(false);
  const [historicalData, setHistoricalData] = useState([]);
  let [days, setDays] = useState(1);

  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);

  useEffect(() => {
    fetchFromApi(`coins/${coinId}`).then((data) => setCoinData(data));
    fetchFromApi(
      `coins/${coinId}/market_chart?vs_currency=${currency.name}&days=${days}&interval=daily`
    ).then((data) => setHistoricalData(data.prices));
  }, [currency, days]);

  return coinData ? (
    <div className="md:flex w-full">
      <div className="md:w-[35%] lg:w-[30%] text-white font-semibold border-none mt-10 px-3">
        <div className="w-full flex flex-col items-center mb-5">
          <img src={coinData.image.large} alt="" className="w-30 h-30" />
          <p className="text-2xl font-bold">{coinData.name.toUpperCase()}</p>
          <p className="text-sm font-normal text-center">
            {coinData.description.en.split('.')[0]}
          </p>
        </div>

        <div className="sm:flex sm:justify-between md:block">
          <p className="text-xl">Rank : {coinData.market_cap_rank}</p>
          <p className="flex items-center text-xl">
            Current Price : <img src={currency.symbol} alt="" className="w-5" />
            <span>
              {coinData.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </span>
          </p>
          <p className="text-xl flex items-center">
            Market Cap : <img src={currency.symbol} alt="" className="w-5" />{' '}
            {coinData.market_data.market_cap[currency.name].toLocaleString()}
          </p>
        </div>
      </div>
      <div className="hidden md:block h-[80vh] w-1 bg-gray-500 mx-5"></div>
      <div className="w-full md:w-[65%] lg:w-[70%]">
        <LineChart
          historicalData={historicalData}
          days={days}
          setDays={setDays}
        />
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="animate-spin w-10 h-10 border-4 border-gray-400 border-t-white rounded-full"></div>
    </div>
  );
};

export default Coin;
