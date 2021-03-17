import ListItem from "./Item";
import {useSelector} from "react-redux";

function List() {
  const items = useSelector( state => state.items );

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
