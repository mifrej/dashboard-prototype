export type ID = number;
export type Price = number;
export type Volume = number;

export interface TOrder {
  order_id: ID;
  price: Price; // Euros per Mega Watt
  volume: Volume; // Mega Watts
}

function energyCalculator(orders: TOrder[], desiredVolume: Volume): Price {
  let volumeToGo: number = 0;
  const selectedOrders = orders
    // sorting orders by price ascending
    .sort((prev: TOrder, next: TOrder) => {
      return prev.price - next.price;
    })
    // reduce orders to fullfil desiredVolume
    .reduce(
      (
        _selectedOrders: TOrder[],
        order: TOrder,
        _: number,
        sortedOrders: TOrder[],
      ) => {
        if (desiredVolume > volumeToGo) {
          volumeToGo += order.volume;
          return [..._selectedOrders, order];
        }
        sortedOrders.splice(0); // early break reduce by modifying original array
        return _selectedOrders;
      },
      [],
    );

  // calculate weighted average price from selected orders
  const totalOrdersVolume: number = selectedOrders.reduce(
    (_totalVolume, order) => _totalVolume + order.volume,
    0,
  );
  const volumeMultipliedByPrice: number = selectedOrders.reduce(
    (_totalVolumeMultipliedByPrice, order) =>
      _totalVolumeMultipliedByPrice + order.volume * order.price,
    0,
  );
  return volumeMultipliedByPrice / totalOrdersVolume;
}

export default energyCalculator;
