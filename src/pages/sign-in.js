import {useRef} from 'react';

import {Container, Title} from "../shared/styles";
import Button from "../shared/button";
import styled from "styled-components";

function SignIn() {
  let userNameRef = useRef();
  let passwordRef = useRef();

  const handleSubmit = (event) => {
    console.log(userNameRef.current.value);
    console.log(passwordRef.current.value);
  };


  return (
      <Container>
        <Title>Sign in</Title>
        <form>
          <input ref={userNameRef} type="text" placeholder="username"/>
          <br/>
          <input ref={passwordRef} className='login-input' type="password"
                 placeholder="password"/>
          <button type="button" onClick={handleSubmit}>click</button>
        </form>
      </Container>
  )
}

const CustomButton = styled(Button)`
  border: 1px dashed red;
`

export default SignIn;
