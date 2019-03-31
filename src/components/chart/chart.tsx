import Chart from 'chart.js';
import React, { useContext, useEffect, useRef } from 'react';
import DataContext from '../data-context';

const ChartComponent: React.SFC<any> = (): JSX.Element => {
  const canvasEl: React.MutableRefObject<null> | HTMLCanvasElement = useRef(
    null,
  );
  const data = useContext(DataContext);
  let chartInstance = null;
  useEffect(() => {
    chartInstance = new Chart(canvasEl.current, {
      data,
      type: 'line',
    });
    chartInstance.update();
  });
  return (
    <>
      <canvas ref={canvasEl} />
      <style jsx>{`
        canvas {
            align-self: center;
        }
      `}</style>
    </>
  );
};

export default ChartComponent;
