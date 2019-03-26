import React from 'react';
import ChartComponent from '../chart/chart';
import EnergyHourly from './energy-hourly-sample';

export interface Card {
  title: string;
  type: string;
}

interface Props {
  data: {};
  card: Card;
}

const Card = (props: Props) => {
  const dataReduced = () => {
    return EnergyHourly;
  };
  return (
    <>
      <h2>{props.card.title}</h2>
      <ChartComponent data={dataReduced()} />
    </>
  );
};

export default Card;
