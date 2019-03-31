import React, { useContext } from 'react';
import DataContext from '../data-context';

const Grid = () => {
  const data = useContext(DataContext);
  const labels = data.labels;
  const dataset = data.datasets[0];
  return (
    <div className="grid">
      <table>
        <caption>{dataset.label}</caption>
        <thead>
          <tr>
            <th className="firstCol">Hour</th>
            <th className="secCol">Price €</th>
          </tr>
        </thead>
        <tbody>
          {dataset.data.map((set, idx) => {
            return (
              <tr key={idx.toString()}>
                <td className="firstCol">{labels[idx]}</td>
                <td className="secCol">{set}€</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        .grid {
          max-height: calc(var(--card-dimension) - 3em);
          width: 100%;
          overflow-y: scroll;
          & table {
            width: 100%;
            border: solid 1px var(--dark-gray);
            border-width: 1px 0 0 1px;
            border-spacing: 0;
            & caption {
              margin-bottom: 0.5em;
            }
            & .firstCol {
              text-align: left;
            }
            & .secCol {
              text-align: right;
            }
            & td,
            & th {
              font-size: 0.8em;
              border: solid 1px var(--dark-gray);
              border-width: 0 1px 1px 0;
              padding: 0.4em;
            }
            & thead th {
              background-color: var(--medium-gray);
              font-weight: bold;
            }
            & tr:nth-child(odd) {
              background: var(--light-gray);
            }
            & tr {
              &:hover {
                background: var(--light-blue);
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Grid;
