import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    /* https://i.ytimg.com/vi/FmbqFZmH-l8/maxresdefault.jpg */
    url("https://i.ytimg.com/vi/FmbqFZmH-l8/maxresdefault.jpg ")
      center;
      /* background-size: cover; */
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width:"75%"})}

  
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-weight: bold;

`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  font-weight: bold;

`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 10px;

`;
const Link = styled.a`

    margin: 5px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;

`

const Login = () => {
    return (
        <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>Forgot password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
    )
}

export default Login
