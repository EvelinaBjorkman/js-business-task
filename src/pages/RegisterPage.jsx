import React, { useState, useC } from "react";
import UserKit from "../data/UserKit";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

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
  }

  return (
    <div>
      <h1>Register</h1>
      <p>Enter details to register</p>
      <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="Organisation Name"
        value={organisationName}
        onChange={(e) => setOrganisationName(e.target.value)}
      />
      <input
        placeholder="Organisation Type"
        value={organisationKind}
        onChange={(e) => setOrganisationKind(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
