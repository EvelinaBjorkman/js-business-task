import React, { useEffect, useContext } from "react";

import UserKit from "../data/UserKit";
import { UserContext } from "../contexts/UserContext";

import { Paragraf } from "../components/Styled";

export default function UserInfo() {
  const { email, setEmail } = useContext(UserContext);
  const { firstName, setFirstName } = useContext(UserContext);
  const { lastName, setLastName } = useContext(UserContext);

  const userKit = new UserKit();

  function getUserInfo() {
    userKit
      .getUserInfo()
      .then((res) => res.json())
      .then((data) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
      });
  }

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Paragraf>Logged in as:</Paragraf>
      <Paragraf><b>{firstName} {lastName}</b></Paragraf>
      <Paragraf><b>{email}</b></Paragraf>
    </div>
  );
}