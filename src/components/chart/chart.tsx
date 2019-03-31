import Chart from 'chart.js';
import React, { useContext, useEffect, useRef } from 'react';
import DataContext from '../data-context';

const ChartComponent: React.SFC<any> = (): JSX.Element => {
  const canvasEl: React.MutableRefObject<null> | HTMLCanvasElement = useRef(
    null,
  );
  const data = useContext(DataContext);
  useEffect(() => {
    const canvasNode: HTMLCanvasElement | null = canvasEl.current;
    if (canvasNode !== null) {
      const _ = new Chart(canvasNode, {
        data,
        type: 'line',
      });
    }
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
