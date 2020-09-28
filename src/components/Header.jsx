import React from "react";
import { Navbar, LinkStyled } from "../components/Styled";

export default function Header() {
  const url = window.location.href;
  return (
    <Navbar>
      {url.includes("/home") || url.includes("/customer") ? (
        <LinkStyled to="/home">Home</LinkStyled>
      ) : url.includes("/") ? (
        <LinkStyled to="/login">Login</LinkStyled>
      ) : (
        ""
      )}
    </Navbar>
  );
}
