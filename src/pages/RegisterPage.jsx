import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

import UserKit from "../data/UserKit";

import {
  Title,
  Paragraf,
  DivDark,
  UnorderedListColumns,
  Input,
  ButtonAdd,
} from "../components/Styled";


export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const history = useHistory();

  const userKit = new UserKit();

  function handleRegister() {
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    );
    history.push(`/msg/${email}`);
  }

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div>
      <Title>Register</Title>
      <Paragraf>Enter details to register</Paragraf>
      <DivDark>
        <UnorderedListColumns>
          <li>
            <Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </li>
          <li>
            <Input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </li>
          <li>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <Input
              placeholder="Organisation Name"
              value={organisationName}
              onChange={(e) => setOrganisationName(e.target.value)}
            />
          </li>
          <li>
            <Input
              placeholder="Organisation Type"
              value={organisationKind}
              onChange={(e) => setOrganisationKind(e.target.value)}
            />
          </li>
        </UnorderedListColumns>
        <ButtonAdd onClick={handleRegister}>Register</ButtonAdd>
      </DivDark>
    </div>
  );
}
