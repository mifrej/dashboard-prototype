import React, { createElement } from 'react';
import ChartComponent from '../chart/chart';
import GridComponent from '../grid/grid';
import Icon from '../icon/icon';

export interface CardProps {
  id: string;
  onClick: () => void;
  type: string;
}

const Card = (props: CardProps) => {
  const { id, onClick, type } = props;
  return (
    <div className="card">
      <header>
        <h3>{`Card id: ${id.split('-')[0]}`}</h3>
        <button className="alert deleteRow" onClick={onClick}>
          <Icon size="20" name="baseline-delete-24px" />
        </button>
      </header>
      {(() => {
        switch (type) {
          case 'chart':
            return <ChartComponent />;
          case 'grid':
            return <GridComponent />;
          default:
            return null;
        }
      })()}
      <style jsx>{`
        .card {
          width: var(--card-dimension);
          height: var(--card-dimension);
          margin-right: 0.5em;
        }
        header {
          display: flex;
          align-items: center;
          justify-self: end;
          justify-content: space-between;
          margin-bottom: 0.2em;
          padding: 0.2em 0.6em;
          background-color: var(--light-gray);
          & h3 {
            font-size: 1em;
            margin: 0;
            line-height: 1;
          }
          & button {
            font-size: 1em;
            margin-left: 0.5em;
            border-radius: 50%;
            padding: 0.3em;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
