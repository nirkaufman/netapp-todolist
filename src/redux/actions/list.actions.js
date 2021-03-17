
// action creator function
// create and return action
export function addItem(item) {
  return {
    type: 'add',
    payload: item
  }
}

export function removeItem(itemId) {
  return {
    type: 'remove',
    payload: itemId
  }
}

export function removeAllItems() {
  return {
    type: 'removeAll',
  }
}

export function fetchItems() {
  return {
    type: 'fetchItems',
  }
}

export function fetchItemsSuccess(items) {
  return {
    type: 'fetchItemsSuccess',
    payload: items
  }
}

export function fetchItemsFailed(error) {
  return {
    type: 'fetchItemsFailed',
    payload: error
  }
}



