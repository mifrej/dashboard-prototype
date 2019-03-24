import energyCalculator from './energy-calculator';
import orders from './orders';

const desiredVolume = 10;
const resultPrice = energyCalculator(orders, desiredVolume);
// tslint:disable-next-line:no-console
console.log(
  `Lowest weighted average price for ${desiredVolume} MW of energy is ${resultPrice.toFixed(
    2,
  )} €`,
);
