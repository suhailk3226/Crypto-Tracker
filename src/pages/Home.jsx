import React, { useContext, useState } from 'react';
import Searchbar from '../components/Searchbar';
import CryptoList from '../components/CryptoList';
import { CoinContext } from '../Context/CoinContextProvider';

const Home = () => {
  const { allCoin, setDisplayCoin } = useContext(CoinContext);
  const [input, setInput] = useState('');
  // console.log(input);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let coin = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLocaleLowerCase());
    });
    setDisplayCoin(coin);
    setInput('');
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center ">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white py-5 ">
          Largest Crypto Marketplace
        </h1>
        <p className="text-gray-200 text-sm">
          Welcome to the World's Largest Crypto Marketplace.
        </p>
        <p className="text-gray-200 text-sm">
          Sign up to explore more about cryptos.
        </p>
      </div>

      <Searchbar
        input={input}
        setInput={setInput}
        handleOnSubmit={handleOnSubmit}
      />
      <CryptoList />
    </div>
  );
};

export default Home;
