import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <HomePage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
