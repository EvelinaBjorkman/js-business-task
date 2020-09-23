import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";

export default function UserInfo() {
  const ROOT_URL = "https://frebi.willandskill.eu/";
  
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const userKit = new UserKit();

  function getUserInfo() {
    const url = `${ROOT_URL}api/v1/me/`;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${userKit.getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
      });
  }

  useEffect(() => {
    getUserInfo();
  });

  return (
    <div>
      <p>
        {firstName} {lastName}
      </p>
      <p>{email}</p>
    </div>
  );
}
