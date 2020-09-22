import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
