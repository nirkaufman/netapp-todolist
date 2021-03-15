function Header(props) {

  function handleKeyDown(event) {
    if(event.code === 'Enter') {
      props.onAddItem(event.target.value);
    }
  }

  return (
      <header className="header">
        <h1>{props.title}</h1>
        <input className="new-todo"
               onKeyDown={handleKeyDown}
               placeholder="Add Todo..."
               autoFocus/>
      </header>
  )
}

export default Header;
