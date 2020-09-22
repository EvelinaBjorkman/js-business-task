import React, { useState } from "react";
import CustomersList from "../components/CustomersList";

export default function HomePage() {
  const [customerName, setCustomerName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNr, setPhoneNr] = useState("");

  function handleAddCustomer() {
    console.log(customerName, email);
  }

  return (
    <div>
      <h1>Home Page</h1>
      <CustomersList />
      <hr />
      <input
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <input
        placeholder="Organisation Number"
        value={organisationNr}
        onChange={(e) => setOrganisationNr(e.target.value)}
      />
      <input
        placeholder="Vat Number"
        value={vatNr}
        onChange={(e) => setVatNr(e.target.value)}
      />
      <input
        placeholder="Reference"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
      />
      <input
        placeholder="Payment Term"
        value={paymentTerm}
        onChange={(e) => setPaymentTerm(e.target.value)}
      />
      <input
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Phone Number"
        value={phoneNr}
        onChange={(e) => setPhoneNr(e.target.value)}
      />
      <button onClick={handleAddCustomer}>Add customer</button>
    </div>
  );
}
