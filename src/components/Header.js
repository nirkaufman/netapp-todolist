import {useRef, useEffect} from 'react';

function Header(props) {
  const inputRef = useRef(); // {current: null}

  useEffect(() => {
    inputRef.current.disabled = true;
  },[])

  function handleKeyDown(event) {
    if(event.code === 'Enter') {
      props.onAddItem(inputRef.current.value);
      inputRef.current.value = '';
    }
  }

  return (
      <header className="header">
        <h1>{props.title}</h1>
        <input className="new-todo"
               ref={inputRef}
               onKeyDown={handleKeyDown}
               placeholder="Add Todo..."/>
      </header>
  )
}

export default Header;
