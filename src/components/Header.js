import {useEffect, useRef} from 'react';

function Header({onAddItem, enableAdd, title}) {
  const inputRef = useRef(); // {current: null}

  useEffect(() => {
    // inputRef.current.disabled = !enableAdd;
  }, [enableAdd])

  function handleKeyDown(event) {
    if(event.code === 'Enter') {
      onAddItem(inputRef.current.value);
      inputRef.current.value = '';
    }
  }

  return (
      <header className="header">
        <h1>{title}</h1>
        <input className="new-todo"
               ref={inputRef}
               onKeyDown={handleKeyDown}
               placeholder="Add Todo..."/>
      </header>
  )
}

export default Header;
