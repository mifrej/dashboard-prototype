import React, { useState } from 'react';
import uuidv1 from 'uuid';
import Icon from '../icon/icon';
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
      <header>
        <button
          className="primary"
          onClick={() =>
            updateRows(currentRows => {
              const newRow = { id: uuidv1() };
              return [...currentRows, newRow];
            })
          }
        >
          <span>Add Row</span>
          <Icon size="20" name="baseline-add_circle-24px" />
        </button>
      </header>
      <style jsx>{`
        header {
          padding: 0 0 0.5em;
          border-bottom: solid var(--border-width-default) var(--medium-gray);
          margin-bottom: var(--margin-bottom-default);
        }
      `}</style>
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
