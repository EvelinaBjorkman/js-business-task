import React, { useContext } from "react";

import { CustomerListContext } from "../contexts/CustomerListContext";

import {
  TitleSub,
  DivDark,
  UnorderedList,
  LinkStyled,
} from "../components/Styled";

export default function CustomersList() {
  const { customerList } = useContext(CustomerListContext);

  return (
    <DivDark>
      <TitleSub>Customer List</TitleSub>
      {customerList &&
        customerList.map((customer) => {
          return (
            <UnorderedList key={customer.id}>
              <li>
                <LinkStyled to={`/customer/${customer.id}`}>
                  <b>{customer.name}</b> {customer.organisationNr},{" "}
                  {customer.reference}
                </LinkStyled>
              </li>
            </UnorderedList>
          );
        })}
    </DivDark>
  );
}
