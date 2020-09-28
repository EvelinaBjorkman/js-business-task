import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import {
  Title,
  DivDark,
  UnorderedList,
  Input,
  ButtonAdd,
} from "../components/Styled";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);

  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  const userKit = new UserKit();

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  }

  function handleLogin() {
    userKit
      .login(email, password)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);
        history.push("/home");
      });
  }

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div>
      {token && uid ? (
        <div>
          <Title>Activate Account</Title>
          <div style={{ textAlign: "center" }}>
            <ButtonAdd onClick={handleActivateUser}>Activate</ButtonAdd>
          </div>
        </div>
      ) : (
        <div>
          <Title>Login</Title>
          <DivDark>
            <UnorderedList>
              <li>
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                {" "}
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
            </UnorderedList>
            <ButtonAdd onClick={handleLogin}>Login</ButtonAdd>
          </DivDark>
        </div>
      )}
    </div>
  );
}
