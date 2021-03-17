import {Container, Title} from "../shared/styles";

function SignIn() {
  return (
      <Container>
        <Title>Sign in</Title>
        <input className='login-input' type="text" placeholder="username"/>
        <br />
        <input className='login-input' type="password" placeholder="password"/>
        <button>submit</button>
      </Container>
  )
}



export default SignIn
