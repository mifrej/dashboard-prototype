import { createContext } from 'react';
import EnergyHourly from './energy-hourly-sample';

const labels: string[] = EnergyHourly.points.reduce(
  (_labels, point) => [..._labels, (point[0] / 1000000000).toFixed(1)],
  [],
);

const datasetData = EnergyHourly.points.reduce((_data, point) => {
  return [..._data, point[1]];
}, []);

const data = {
  datasets: [
    {
      borderColor: '#a61d39',
      data: datasetData,
      fill: false,
      label: EnergyHourly.name,
    },
  ],
  labels,
};

const DataContext = createContext(data);

export default DataContext;
