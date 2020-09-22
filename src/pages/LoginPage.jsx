import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";

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

  return (
    <div>
      {token && uid ? (
        <div>
          <h2>Activate Account</h2>
          <button onClick={handleActivateUser}>Activate User</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            // type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
