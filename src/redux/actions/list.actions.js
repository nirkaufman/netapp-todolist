
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

