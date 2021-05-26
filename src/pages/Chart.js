import React from 'react';
import Header from '../components/chart/Header';
import Song from '../components/chart/Song';
import Controls from '../components/chart/Controls';
import './Chart.css';

const Chart = () => {
  return (
    <div className="chart">
      <Header />
      <Song />
      <Controls />
    </div>
  );
};

export default Chart;
