import axios from "axios";
import { MAIN_API, ROUTE_LOGIN, ROUTE_REGISTER } from "../config/api_routes";

const login = async (email, password, navigateToErrorPage) => {
  try {
    const user = await axios.post(
      MAIN_API.length !== 0
        ? MAIN_API.concat(ROUTE_LOGIN)
        : "https://reqres.in/api/login",
      {
        email: email,
        password: password,
      }
    );
    return user;
  } catch (error) {
    navigateToErrorPage(error.message);
    throw error;
  }
};

const register = async (
  firstName,
  lastName,
  idPassport,
  email,
  password,
  avatar,
  account,
  navigateToErrorPage
) => {
  try {
    const newUser = await axios.post(
      MAIN_API.length !== 0
        ? MAIN_API.concat(ROUTE_REGISTER)
        : "https://reqres.in/api/register",
      {
        name: firstName,
        lastname: lastName,
        dni: idPassport,
        email: email,
        password: password,
        avatar: avatar,
        cbuDollar: account,
      }
    );
    return newUser;
  } catch (error) {
    navigateToErrorPage(error.message);
    throw error;
  }
};

export { login, register };
