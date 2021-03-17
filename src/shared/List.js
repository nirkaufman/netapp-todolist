import {useEffect} from 'react';
import ListItem from "./Item";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "../redux/actions/list.actions";

function List() {
  const items = useSelector( state => state.items );
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchItems())
  }, []);

  return (
      <section className="main">
        <input className="toggle-all"
               type="checkbox"/>
        <ul className="todo-list">
          {items.map((item) =>  (
              <ListItem key={item.id} item={item}
                        onRemoveItem={() => {}} /> )
          )}
        </ul>
      </section>
  )
}

export default List;
