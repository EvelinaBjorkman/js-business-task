import React, {useEffect} from "react";
import UserKit from "../data/UserKit";

export default function CustomersList() {
  const ROOT_URL = "https://frebi.willandskill.eu/";

  const userKit = new UserKit();

  function getCustomerList() {
    const url = `${ROOT_URL}api/v1/customers/`;
    fetch(url, {
      headers: {
        "Authorization": `Bearer ${userKit.getToken()}`
      }
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data.results);
    })
  }

  useEffect(() => {
    getCustomerList()
  })

  return <div>Customer List</div>;
}
