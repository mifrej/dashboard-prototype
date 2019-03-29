import React from 'react';
import ChartComponent from '../chart/chart';
import Icon from '../icon/icon';

export interface CardProps {
  data: {}; // mark for the data shape
  id: string;
  onClick: () => void;
  title: string;
  type: string;
}

const Card = (props: CardProps) => {
  const { data, onClick, title } = props;
  return (
    <div className="card">
      <header>
        <h3>{title}</h3>
        <button className="alert deleteRow" onClick={onClick}>
          <Icon size="20" name="baseline-delete-24px" />
        </button>
      </header>
      <ChartComponent data={data} />
      <style jsx>{`
        .card {
          width: var(--card-dimension);
          height: var(--card-dimension);
        }
      `}</style>
    </div>
  );
};

export default Card;
