import React from 'react';

interface GridProps {
  data: {};
}

const Grid = (props: GridProps) => {
  const { data } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data {console.log(data)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Grid;
