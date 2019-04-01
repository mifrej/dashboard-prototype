import moment from 'moment';
import { createContext } from 'react';
import EnergyHourly, { EnergyHourlyProps } from './energy-hourly-sample';

export type Label = string;
export type DataSetData = number;

export interface DataSet {
  borderColor: string;
  data: DataSetData[];
  fill: boolean;
  label: string;
}

export interface Data {
  datasets: DataSet[];
  labels: Label[];
}

export class ModelContextData {
  public payload: EnergyHourlyProps;
  constructor(payload: EnergyHourlyProps) {
    this.payload = payload;
  }

  public buildLabels(): Label[] {
    return this.payload.points.reduce(
      (_labels: string[], point: number[]) => [
        ..._labels,
        moment(point[0]).format('DD MMM, hh a'),
      ],
      [],
    );
  }

  public buildDataSets(): DataSetData[] {
    return this.payload.points.reduce(
      (_data, point) => [..._data, point[1]],
      [],
    );
  }

  public modelData(): Data {
    return {
      datasets: [
        {
          borderColor: '#a61d39',
          data: this.buildDataSets(),
          fill: false,
          label: this.payload.name,
        },
      ],
      labels: this.buildLabels(),
    };
  }
}

const data = new ModelContextData(EnergyHourly);
const DataContext = createContext(data.modelData());

export default DataContext;
