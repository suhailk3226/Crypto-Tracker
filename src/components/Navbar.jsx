import React, { useContext } from 'react';
import logo_icon from '../assets/logo.svg';
import arrow_icon from '../assets/arrow.svg';
import eur_icon from '../assets/eur.svg';
import inr_icon from '../assets/inr.svg';
import usd_icon from '../assets/usd.svg';
import { CoinContext } from '../Context/CoinContextProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const handleCurrencyChange = (e) => {
    switch (e.target.value) {
      case 'inr':
        {
          setCurrency({ name: 'inr', symbol: inr_icon });
        }
        break;
      case 'usd':
        {
          setCurrency({ name: 'usd', symbol: usd_icon });
        }
        break;
      case 'eur':
        {
          setCurrency({ name: 'eur', symbol: eur_icon });
        }
        break;
    }
  };
  return (
    <div className="px-3 py-2 md:px-6 flex justify-between items-center w-full">
      <Link to={'/'} className="logo flex gap-2">
        <img src={logo_icon} alt="" />
        <h1 className="text-white text-2xl md:text-3xl">CryptoClan</h1>
      </Link>
      <div className="flex items-center">
        <select
          onChange={handleCurrencyChange}
          className="bg-transparent outline-none border-white border-2 text-white rounded-lg px-0.5 text-sm cursor-pointer"
        >
          <option value="inr" className="bg-[#332677]">
            INR
          </option>
          <option value="usd" className="bg-[#332677]">
            USD
          </option>
          <option value="eur" className="bg-[#332677]">
            EUR
          </option>
        </select>
        <button className="flex items-center gap-2 ml-5 bg-white text-black px-2 md:px-3 rounded-2xl py-0.5 md:py-1 text-sm sm:text-[1rem] cursor-pointer">
          Sign Up <img src={arrow_icon} alt="" className="w-2 md:w-3" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
