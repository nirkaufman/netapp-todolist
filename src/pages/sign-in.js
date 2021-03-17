import {Container, Title} from "../shared/styles";
import Button from "../shared/button";
import styled from "styled-components";

function SignIn() {
  return (
      <Container>
        <Title>Sign in</Title>
        <input type="text" placeholder="username"/>
        <br />
        <input className='login-input' type="password" placeholder="password"/>
        <CustomButton size='small'>click</CustomButton>
      </Container>
  )
}

const CustomButton = styled(Button)`
  border: 1px dashed red;
`

export default SignIn
