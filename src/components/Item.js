function ListItem({item}) {
  return (
      <li>
        <div className="view">
          <input className="toggle"
                 checked={item.completed}
                 type="checkbox"/>
          <label>{item.title}</label>
          <button className="destroy" />
        </div>
        <input className="edit"/>
      </li>
  )
}

export default ListItem;
