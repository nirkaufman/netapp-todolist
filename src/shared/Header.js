import {useEffect, useRef} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addItem} from "../redux/actions/list.actions";

function Header({enableAdd, title}) {
  const inputRef = useRef();// {current: null}
  const dispatch = useDispatch();

  useEffect(() => {
    // inputRef.current.disabled = !enableAdd;
  }, [enableAdd])

  function handleKeyDown(event) {
    if(event.code === 'Enter') {
      dispatch(addItem({
        id: Date.now,
        title: inputRef.current.value,
        completed: false
      }))
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
