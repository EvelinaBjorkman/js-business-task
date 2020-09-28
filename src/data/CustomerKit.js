import UserKit from "./UserKit";

const ROOT_URL = "https://frebi.willandskill.eu/";
const userKit = new UserKit();

export default class {
  async addCustomer(
    name,
    organisationNr,
    vatNr,
    reference,
    paymentTerm,
    website,
    email,
    phoneNumber
  ) {
    const url = `${ROOT_URL}api/v1/customers/`;
    const payload = {
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm: parseInt(paymentTerm),
      website,
      email,
      phoneNumber,
    };
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userKit.getToken()}`,
      },
      body: JSON.stringify(payload),
    });
  }

  async getCustomer(customerList, id) {
    return customerList.find((customer) => {
      return customer.id === id;
    });
  }

  async getCustomerList() {
    const url = `${ROOT_URL}api/v1/customers/`;
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${userKit.getToken()}`,
      },
    });
  }

  async deleteCustomer(id) {
    const url = `${ROOT_URL}/api/v1/customers/${id}/`;
    return fetch(url, {
      method: "Delete",
      headers: {
        Authorization: `Bearer ${userKit.getToken()}`,
      },
    });
  }
}
