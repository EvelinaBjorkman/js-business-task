import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { CustomerListContext } from "../contexts/CustomerListContext";
import CustomerKit from "../data/CustomerKit";

import {
  Title,
  DivDark,
  TitleSub,
  Paragraf,
  ButtonWarning,
} from "../components/Styled";

export default function DescribedCustomerPage(props) {
  const id = parseInt(props.match.params.id);

  const { customerList, setCustomerList } = useContext(CustomerListContext);
  const [customer, setCustomer] = useState({});

  const history = useHistory();
  const customerKit = new CustomerKit();

  function handleOnclick() {
    const desission = window.confirm("Sure you want to delete this customer?");
    if (desission) {
      handleDelete(customer.id);
    }
  }

  function handleDelete(id) {
    customerKit.deleteCustomer(id);
    history.push("/home");
    getCustomerList();
  }

  function handleError() {
    customerKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
      });
    getCustomer();
  }

  function getCustomer() {
    customerKit
      .getCustomer(customerList, id)
      .then((result) => setCustomer(result));
  }

  function getCustomerList() {
    customerKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
      });
  }

  useEffect(() => {
    getCustomer();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Title>Detailed Customer</Title>
      {customer ? (
        <DivDark>
          <TitleSub>{customer.name}</TitleSub>
          <Paragraf>
            Organisation Nr: <b>{customer.organisationNr}</b>
          </Paragraf>
          <Paragraf>
            Vat Nr: <b>{customer.vatNr}</b>
          </Paragraf>
          <Paragraf>
            Reference: <b>{customer.reference}</b>
          </Paragraf>
          <Paragraf>
            Payment Term: <b>{customer.paymentTerm}</b>
          </Paragraf>
          <Paragraf>
            Website: <b>{customer.website}</b>
          </Paragraf>
          <Paragraf>
            Email: <b>{customer.email}</b>
          </Paragraf>
          <Paragraf>
            Phone Nr: <b>{customer.phoneNumber}</b>
          </Paragraf>
          <ButtonWarning onClick={handleOnclick}>Delete</ButtonWarning>
        </DivDark>
      ) : (
        handleError()
      )}
    </div>
  );
}
