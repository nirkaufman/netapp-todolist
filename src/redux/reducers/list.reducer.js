
export function listReducer(currentItems = [], itemsAction) {
  switch (itemsAction.type) {
    case 'add':
      return [...currentItems, itemsAction.payload];

    case 'removeAll':
      return [];

    case 'fetchItemsSuccess':
      return itemsAction.payload;

    default:
      return currentItems;
  }
}
