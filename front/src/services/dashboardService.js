/* import { TOKEN } from "../config/token"; */
import {
  MAIN_API,
  ROUTE_GET_PRODUCTS,
  ROUTE_GET_TRANSACTIONS,
  ROUTE_BUY_CRYPTO,
  ROUTE_RECHARGE_WALLET,
} from "../config/api_routes";

export const obtainProduct = async () => {
  return await fetch(
    MAIN_API.length !== 0
      ? MAIN_API.concat(ROUTE_GET_PRODUCTS)
      : `https://reqres.in/api/unknown/23`,
    {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      return response.json();
    })
    .catch((error) => console.error(`Error: ${error}`))
    .finally(() => console.info("Request of products finished"));
};

export const sendOffer = async (data) => {
  return await fetch(
    MAIN_API.length !== 0
      ? MAIN_API.concat(ROUTE_BUY_CRYPTO)
      : "https://reqres.in/api/unknown/23",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      response.ok ? true : false;
    })
    .catch((error) => console.log(`Error: ${error}`))
    .finally(() => console.info("Sending offer finished"));
};

export const getTransactions = async (id) => {
  return await fetch(
    MAIN_API.length !== 0
      ? MAIN_API.concat(ROUTE_GET_TRANSACTIONS).concat(id)
      : `https://reqres.in/api/unknown/23`,
    {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      return response.json();
    })
    .catch((error) => console.error(`Error: ${error}`))
    .finally(() => console.info("Request of transactions finished"));
};

export const rechargeWallet = async (id, amount) => {
  return await fetch(
    MAIN_API.length !== 0
      ? MAIN_API.concat(ROUTE_RECHARGE_WALLET).concat(id)
      : `https://reqres.in/api/unknown/23`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: amount,
      }),
    }
  )
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const data = await response.json();
      console.log(data);
      return data;
    })
    .catch((error) => console.error(`Error: ${error}`))
    .finally(() => console.info("Request of transactions finished"));
};
