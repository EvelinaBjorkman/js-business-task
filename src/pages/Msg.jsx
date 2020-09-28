import React from "react";
import { Title, Paragraf } from "../components/Styled";

export default function Msg( props ) {
  const email = props.match.params.email;
  return (
    <div>
      <Title>Welcome</Title>
      <Paragraf>
        An email has been sent to <b>{email}</b>.
      </Paragraf>
      <Paragraf>Please click the link in email to activate your account.</Paragraf>
    </div>
  );
}
