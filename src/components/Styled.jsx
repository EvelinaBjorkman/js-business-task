import styled from "styled-components";
import { Link } from "react-router-dom";

export const Paragraf = styled.p`
  font-family: "Kumbh Sans", sans-serif;
`;

export const Title = styled.h1`
  font-family: "Kumbh Sans", sans-serif;
  text-align: center;
  font-size: 3rem;
  color: silver;
  margin-top: 100px;
`;

export const TitleSub = styled(Title)`
  font-size: 2rem;
  text-align: left;
  margin-top: 20px;
`;

export const Div = styled.div`
  padding: 20px;
  margin-bottom: 50px;
`;

export const DivMain = styled(Div)`
  margin-left: 100px;
  margin-right: 100px;
`;

export const DivDark = styled(Div)`
  background: gray;
  border-radius: 6px;
`;

export const UnorderedList = styled.ul`
  list-style: none;
`;

export const UnorderedListColumns = styled(UnorderedList)`
  column-count: 2;
  column-gap: 20px;
`;

export const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-family: "Kumbh Sans", sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 25vw;
  font-size: 18px;
`;

export const Button = styled.button`
  font-family: "Kumbh Sans", sans-serif;
  font-size: 17px;
  padding: 7px;
  border-radius: 4px;
  border: 2px solid black;

  &:hover {
    font-size: 18px;
  }
`;

export const ButtonAdd = styled(Button)`
  &:hover {
    background: #8fbc8f;
  }
`

export const ButtonWarning = styled(Button)`
&:hover {
  background: #b31b1b;
}
`

export const Navbar = styled.nav`
background: #fe5a1d;
padding: 20px;
min-height: 30px;
border-bottom: 2px solid black;
position: fixed;
top: 0;
left: 0;
right: 0;
`
