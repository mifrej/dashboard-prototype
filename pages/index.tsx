import Dashboard from '../src/components/dashboard/dashboard';
import EnergyHourly from '../src/components/dashboard/energy-hourly-sample';

const data = EnergyHourly.points.reduce(
  (carry, point) => [...carry, { x: point[0], y: point[1] }],
  [],
);

const Index = () => <Dashboard data={data} />;

export default Index;
