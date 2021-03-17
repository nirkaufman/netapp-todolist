
export function listReducer(currentItems = [], itemsAction) {
  switch (itemsAction.type) {
    case 'add':
      return [...currentItems, itemsAction.payload];

    case 'removeAll':
      return [];

    default:
      return currentItems;
  }
}
