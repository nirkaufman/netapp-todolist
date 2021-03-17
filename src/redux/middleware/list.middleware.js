import {setLoading} from "../actions/loading.actions";
import {fetchItemsFailed, fetchItemsSuccess} from "../actions/list.actions";

export const listMiddleware = ({dispatch, getState}) => (next) => (action) => {
  next(action);

  if(action.type === 'fetchItems' && getState().items.length === 0) {
    dispatch(setLoading(true));

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(results => results.json())
        .then(items =>  dispatch(fetchItemsSuccess(items)))
        .catch(error => dispatch(fetchItemsFailed(error)))
        .finally(() =>  dispatch(setLoading(false)))
  }

}
