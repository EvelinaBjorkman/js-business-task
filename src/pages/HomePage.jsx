import React, { useState, useContext, useEffect } from "react";

import CustomersList from "../components/CustomersList";
import CustomerKit from "../data/CustomerKit";
import UserInfo from "../components/UserInfo";

import { CustomerListContext } from "../contexts/CustomerListContext";

import {
  DivDark,
  TitleSub,
  UnorderedListColumns,
  Input,
  ButtonAdd,
} from "../components/Styled";

import { Title } from "../components/Styled";

export default function HomePage() {
  const [customerName, setCustomerName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNr, setPhoneNr] = useState("");

  const { setCustomerList } = useContext(CustomerListContext);

  const customerKit = new CustomerKit();

  function getCustomerList() {
    customerKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
      });
  }

  function handleAddCustomer() {
    customerKit
      .addCustomer(
        customerName,
        organisationNr,
        vatNr,
        reference,
        paymentTerm,
        website,
        email,
        phoneNr
      )
      .then(() => {
        getCustomerList();
        clearInputFields();
      });
  }

  function clearInputFields() {
    setCustomerName("");
    setOrganisationNr("");
    setVatNr("");
    setReference("");
    setPaymentTerm("");
    setWebsite("");
    setEmail("");
    setPhoneNr("");
  }

  useEffect(() => {
    getCustomerList();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Title>Home Page</Title>
      <UserInfo />
      <CustomersList />
      <DivDark>
        <TitleSub>Add new Customer</TitleSub>
        <UnorderedListColumns>
          <form id="form">
            <li>
              {" "}
              <Input
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </li>
            <li>
              <Input
                placeholder="Organisation Number"
                value={organisationNr}
                onChange={(e) => setOrganisationNr(e.target.value)}
              />
            </li>
            <li>
              {" "}
              <Input
                placeholder="Vat Number"
                value={vatNr}
                onChange={(e) => setVatNr(e.target.value)}
              />
            </li>
            <li>
              {" "}
              <Input
                placeholder="Reference"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
              />
            </li>
            <li>
              {" "}
              <Input
                placeholder="Payment Term"
                value={paymentTerm}
                onChange={(e) => setPaymentTerm(e.target.value)}
              />
            </li>
            <li>
              {" "}
              <Input
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
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
                placeholder="Phone Number"
                value={phoneNr}
                onChange={(e) => setPhoneNr(e.target.value)}
              />
            </li>
          </form>
        </UnorderedListColumns>

        <ButtonAdd onClick={handleAddCustomer}>Add customer</ButtonAdd>
      </DivDark>
    </div>
  );
}
