import React, { useContext } from 'react';
import { CoinContext } from '../Context/CoinContextProvider';

const Searchbar = ({ input, setInput, handleOnSubmit }) => {
  const { allCoin } = useContext(CoinContext);
  return (
    <form
      onSubmit={handleOnSubmit}
      className="bg-white sm:w-lg md:w-xl mx-2 sm:mx-auto my-10 py-0.5 md:py-1 pl-3 pr-1 flex justify-between rounded"
    >
      <input
        type="text"
        value={input}
        list="coinlist"
        placeholder="Search Crypto . . . ."
        className="w-full outline-none"
        required
        onChange={(e) => setInput(e.target.value)}
      />
      <datalist id="coinlist">
        {allCoin.map((item, idx) => (
          <option key={idx} value={item.name} />
        ))}
      </datalist>
      <button
        type="submit"
        className="bg-[#005FFF] text-white px-5 py-0.5 sm:py-1 md:py-1.5 outline-none rounded cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
