function Header(props) {


  return (
      <header className="header">
        <h1>{props.title}</h1>
        <input className="new-todo"
               placeholder="Add Todo..."
               autoFocus/>
      </header>
  )
}

export default Header;
