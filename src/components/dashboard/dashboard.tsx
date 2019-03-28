import React, { useState } from 'react';
import Row from './row/row';

interface Props {
  data: {}; // static data sample for all cards
}

const Dashboard: React.FunctionComponent<Props> = (
  props: Props,
): JSX.Element => {
  const { data } = props;

  const initialRows = [{}];
  const [rows, addRow] = useState(initialRows);

  return (
    <div className="dashboard">
      {rows.map((row, id) => (
        <Row key={id.toString()} data={data} />
      ))}
      <button
        onClick={() =>
          addRow(currentRows => {
            const newRow = {};
            return [newRow, ...currentRows];
          })
        }
      >
        Add Row
      </button>
    </div>
  );
};

export default Dashboard;
