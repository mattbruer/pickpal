import React from 'react';
import { useSelector } from 'react-redux';
import './title.css';

const Title = () => {
  const { title } = useSelector((state) => state.chart);
  return <div className="title">{title}</div>;
};

export default Title;
