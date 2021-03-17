import styled, {css} from "styled-components";

const Button = styled.button`
  height: 20px;
  padding: ${ (props) => props.size === 'small' ? 0 : '20px'};
  border: 2px solid red;
`

export default Button;
