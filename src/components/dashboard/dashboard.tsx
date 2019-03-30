import React, { useState } from 'react';
import uuidv1 from 'uuid';
import Icon from '../icon/icon';
import Row from './row/row';

interface Row {
  id: string;
}

const Dashboard: React.FunctionComponent<any> = (): JSX.Element => {
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
      {rows.map(row => (
        <Row
          id={row.id}
          key={row.id}
          onClick={() =>
            updateRows(currentRows =>
              currentRows.filter(item => item.id !== row.id),
            )
          }
        />
      ))}
      <footer>
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
      </footer>
      <style jsx>{`
        header,
        footer {
          padding: 0 0 0.5em;
          border-bottom: solid var(--border-width-default) var(--medium-gray);
          margin-bottom: var(--margin-bottom-default);
          & button {
            & span {
              display: inline-block;
              padding-right: 0.5em;
            }
          }
        }
        footer {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
