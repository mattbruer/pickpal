import React from 'react';
import Header from '../components/chart/Header';
import Song from '../components/chart/Song';
import Controls from '../components/chart/Controls';
import MeasureEditModal from '../components/chart/MeasureEditModal'
import './Chart.css';

const Chart = () => {
  return (
    <div className="chart">

      <Header />
      <MeasureEditModal />
      <Song />
      <Controls />
    </div>
  );
};

export default Chart;
