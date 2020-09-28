import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DescribedCustomerPage from "./pages/DescribedCustomerPage";
import Msg from "./pages/Msg";

import { CustomerListContext } from "./contexts/CustomerListContext";
import { UserContext } from "./contexts/UserContext";

import { DivMain } from "./components/Styled";

function App() {
  const [customerList, setCustomerList] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  return (
    <DivMain>
      <Header />

      <Switch>
        <UserContext.Provider
          value={{
            firstName,
            setFirstName,
            lastName,
            setLastName,
            email,
            setEmail,
          }}
        >
          <CustomerListContext.Provider
            value={{ customerList, setCustomerList }}
          >
            <Route
              path="/customer/:id"
              render={(props) => {
                return <DescribedCustomerPage {...props} />;
              }}
            ></Route>

            <Route
              path="/msg/:email"
              render={(props) => {
                return <Msg {...props} />;
              }}
            ></Route>

            <Route path="/home">
              <HomePage />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/">
              <RegisterPage />
            </Route>
          </CustomerListContext.Provider>
        </UserContext.Provider>
      </Switch>
    </DivMain>
  );
}

export default App;
