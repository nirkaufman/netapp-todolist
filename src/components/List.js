import ListItem from "./Item";

function List(props) {

  // todo: simple way to iterate and create
  // todo: React elements
  // function buildList() {
  //   const listItems = [];
  //
  //   for(let i =0; i < props.items.length; i++) {
  //     listItems.push(
  //         <li>
  //           <div className="view">
  //             <input className="toggle"
  //                    type="checkbox" />
  //             <label>{props.items[i].title}</label>
  //             <button className="destroy" />
  //           </div>
  //           <input className="edit" />
  //         </li>
  //     )
  //   }
  //
  //   return listItems;
  // }

  return (
      <section className="main">
        <input className="toggle-all"
               type="checkbox"/>
        <ul className="todo-list">
          {props.items.map((item, index) =>  (
              <ListItem item={item}
                        onRemoveItem={() => props.onRemoveItem(index)} /> )
          )}
        </ul>
      </section>
  )
}

export default List;
