import React, { useState } from 'react';
import uuidv1 from 'uuid';
import Row from './row/row';

interface Row {
  id: string;
}
interface Props {
  data: {}; // static data sample for all cards
}

const Dashboard: React.FunctionComponent<Props> = (
  props: Props,
): JSX.Element => {
  const { data } = props;

  const initialRows: Row[] = [{ id: uuidv1() }];
  const [rows, updateRows] = useState(initialRows);

  return (
    <div className="dashboard">
      <button
        onClick={() =>
          updateRows(currentRows => {
            const newRow = { id: uuidv1() };
            return [...currentRows, newRow];
          })
        }
      >
        Add Row
      </button>
      {rows.map(row => (
        <Row
          data={data}
          id={row.id}
          key={row.id.toString()}
          onClick={() =>
            updateRows(currentRows =>
              currentRows.filter(item => item.id !== row.id),
            )
          }
        />
      ))}
    </div>
  );
};

export default Dashboard;
