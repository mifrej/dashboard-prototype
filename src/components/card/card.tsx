import React from 'react';
import ChartComponent from '../chart/chart';

interface Props {
  data: {}; // mark for the data shape
  title: string;
  type: string;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      {/* Proper type of widget should be loaded */}
      <ChartComponent data={props.data} />
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
