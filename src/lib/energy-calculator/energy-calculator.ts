export type ID = number;
export type Price = number;
export type PriceFormatted = string;
export type Volume = number;
export type Warning = string;

export interface TOrder {
  order_id: ID;
  price: Price; // Euros per Mega Watt
  volume: Volume; // Mega Watts
}

function energyCalculator(
  orders: TOrder[],
  desiredVolume: Volume,
): PriceFormatted | Error {
  let volumeToGo: Volume = desiredVolume;
  let ordersVolume = 0; // collected orders' volume

  const volumeMultipliedPrice = orders
    // sorting orders by price ascending
    .sort((prev: TOrder, next: TOrder) => prev.price - next.price)
    .reduce(
      (
        _volumeMultipliedPrice: number,
        order: TOrder,
        _: number,
        initialOrders: TOrder[],
      ) => {
        if (volumeToGo === 0) {
          initialOrders.splice(0); // early break reduce by modifying original array
        } else {
          if (volumeToGo - order.volume < 0) {
            // partial order
            order.volume = volumeToGo;
            volumeToGo = 0;
          } else {
            volumeToGo -= order.volume;
          }
          ordersVolume += order.volume;
          // tslint:disable-next-line:no-parameter-reassignment
          _volumeMultipliedPrice += order.volume * order.price;
        }
        return _volumeMultipliedPrice;
      },
      0,
    );

  if (ordersVolume < desiredVolume) {
    throw new Error('There is not enough MW volume in available orders');
  }
  return (volumeMultipliedPrice / ordersVolume).toFixed(1);
}
export default energyCalculator;
