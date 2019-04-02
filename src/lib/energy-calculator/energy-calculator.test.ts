import energyCalculator, {
  ID,
  Price,
  TOrder,
  Volume,
} from './energy-calculator';
import orders from './orders';

const _mockedOrders: TOrder[] = [
  { order_id: 1, price: 2, volume: 2 },
  { order_id: 2, price: 4, volume: 2 },
  { order_id: 3, price: 6, volume: 2 },
];

describe('Lowest weighted average price calculator', () => {
  let mockedOrders;
  beforeEach(() => {
    mockedOrders = [..._mockedOrders];
  });

  it('given specific mocked orders and desired volume, should return 4', () => {
    const desiredVolume = 6;
    const resultPrice = energyCalculator(mockedOrders, desiredVolume);
    console.log(
      `Lowest weighted average price for ${desiredVolume} MW of energy is ${resultPrice} €`,
    );
    expect(resultPrice).toBe('4.0');
  });
  it('given specific mocked orders and desired volume, should return 2', () => {
    const desiredVolume = 2;
    const resultPrice = energyCalculator(mockedOrders, desiredVolume);
    console.log(
      `Lowest weighted average price for ${desiredVolume} MW of energy is ${resultPrice} €`,
    );
    expect(resultPrice).toBe('2.0');
  });

  it('given specific mocked orders and desired volume, should return 3.6', () => {
    const desiredVolume = 5;
    const resultPrice = energyCalculator(mockedOrders, desiredVolume);

    console.log(
      `Lowest weighted average price for ${desiredVolume} MW of energy is ${resultPrice} €`,
    );
    expect(resultPrice).toBe('3.6');
  });

  it('given specific mocked orders and desired volume higher then volume available in offers, should throw error', () => {
    const desiredVolume = 100;
    const resultPrice = () => energyCalculator(mockedOrders, desiredVolume);

    expect(resultPrice).toThrow(
      'There is not enough MW volume in available orders',
    );
  });
});
