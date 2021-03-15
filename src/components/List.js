import ListItem from "./Item";
import {useEffect, useRef, useState} from "react";

function List(props) {
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
