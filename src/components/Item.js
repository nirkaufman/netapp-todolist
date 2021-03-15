function ListItem({item, onRemoveItem}) {
  return (
      <li>
        <div className="view">
          <input className="toggle"
                 checked={item.completed}
                 type="checkbox"/>
          <label>{item.title}</label>
          <button className="destroy" onClick={onRemoveItem}/>
        </div>
        <input className="edit"/>
      </li>
  )
}

export default ListItem;
