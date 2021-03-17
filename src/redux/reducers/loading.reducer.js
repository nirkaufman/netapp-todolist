export function loadingReducer(currentLoading = false, loadingAction) {
  if(loadingAction.type === 'setLoading')  {
    return loadingAction.payload;
  }

  return currentLoading;
}
