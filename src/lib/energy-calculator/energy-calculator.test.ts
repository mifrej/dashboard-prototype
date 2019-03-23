import energyCalculator, {
  ID,
  Price,
  TOrder,
  Volume,
} from './energy-calculator';
import orders from './orders';

const mockedOrders: TOrder[] = [
  { order_id: 1, price: 2, volume: 2 },
  { order_id: 2, price: 4, volume: 2 },
  { order_id: 3, price: 6, volume: 2 },
];

describe('Lowest weighted average price calculator', () => {
  it('given specific mocked orders and desired volume, should return 4', () => {
    const desiredVolume = 6;
    const resultPrice = energyCalculator(mockedOrders, desiredVolume);
    console.log(
      `Lowest weighted average price for ${desiredVolume} MW of energy is ${resultPrice} €`,
    );
    expect(resultPrice).toBe(4);
  });
  it('given specific mocked orders and desired volume, should return 2', () => {
    const desiredVolume = 2;
    const resultPrice = energyCalculator(mockedOrders, desiredVolume);
    console.log(
      `Lowest weighted average price for ${desiredVolume} MW of energy is ${resultPrice} €`,
    );
    expect(resultPrice).toBe(2);
  });
});
