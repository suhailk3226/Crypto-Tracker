import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart, { elements } from 'chart.js/auto';
import { CoinContext } from '../Context/CoinContextProvider';
import { daysData } from '../Context/Data';

// import Chart from 'react-google-charts';

const LineChart = ({ historicalData, days, setDays }) => {
  const { currency } = useContext(CoinContext);
  return historicalData ? (
    <>
      <Line
        className="md:mt-5 md:px-10"
        data={{
          labels: historicalData.map((historic) => {
            let date = new Date(historic[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
                : `${date.getHours()} : ${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              data: historicalData.map((historic) => historic[1]),
              label: `Price (Past ${days} Days) in ${currency.name}`,
              // borderColor: 'blue',
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
      <div className="flex items-center justify-around py-5">
        {daysData.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setDays(item.value)}
            className="text-cyan-900 font-semibold border-2 rounded px-4"
          >
            {item.lable}
          </button>
        ))}
      </div>
    </>
  ) : (
    ''
  );
};

export default LineChart;
