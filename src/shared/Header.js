import {useEffect, useRef} from 'react';
import styled from "styled-components";

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
        <HeaderTitle>{title}</HeaderTitle>
        <input className="new-todo"
               ref={inputRef}
               onKeyDown={handleKeyDown}
               placeholder="Add Todo..."/>
      </header>
  )
}

const HeaderTitle = styled.h1`
  color: red;
`

export default Header;
