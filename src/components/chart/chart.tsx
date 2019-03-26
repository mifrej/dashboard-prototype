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
    console.log(data)
    console.log(canvasEl.current)
    chartInstance = new Chart(canvasEl.current, { data, type: 'line' });
    chartInstance.update();
  });
  return <canvas id={id} ref={canvasEl} width="400" height="400" />;
};

export default ChartComponent;
