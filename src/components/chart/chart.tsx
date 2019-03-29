import Chart from 'chart.js';
import React, { useEffect, useRef } from 'react';

interface DataSet {
  label: string;
  data: number[];
  backgroundColor?: string[];
  borderColor?: string[];
  borderWidth: number;
}

interface ChartData {
  labels: string[];
  datasets: DataSet[];
}

interface ChartOptions {
  type: string;
  data: ChartData;
}

interface Props {
  data: () => ChartOptions;
  id: string;
}

const ChartComponent: React.SFC<Props> = (props: Props): JSX.Element => {
  const canvasEl = useRef(null);
  const { data, id } = props;
  let chartInstance = null;
  useEffect(() => {
    chartInstance = new Chart(canvasEl.current, { data: { datasets: [ { label: 'H', data } ] }, type: 'scatter' });
    chartInstance.update();
  });
  return <canvas id={id} ref={canvasEl} />;
};

export default ChartComponent;
