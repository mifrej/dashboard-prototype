import Chart from 'chart.js';
import React, { useContext, useEffect, useRef } from 'react';
import DataContext from '../data-context';
interface Props {
  id: string;
}

const ChartComponent: React.SFC<Props> = (props: Props): JSX.Element => {
  const canvasEl = useRef(null);
  const { id } = props;
  const data = useContext(DataContext);
  let chartInstance = null;
  useEffect(() => {
    chartInstance = new Chart(canvasEl.current, {
      data,
      type: 'line',
    });
    chartInstance.update();
  });
  return <canvas id={id} ref={canvasEl} />;
};

export default ChartComponent;
