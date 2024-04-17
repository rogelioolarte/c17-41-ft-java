import axios from "axios";
import { MAIN_API, ROUTE_LOGIN, ROUTE_REGISTER } from "../config/api_routes";

const login = async (email, password, navigateToErrorPage) => {
  try {
<<<<<<< HEAD
    const user = await axios.post(
      MAIN_API.length !== 0
        ? MAIN_API.concat(ROUTE_LOGIN)
        : "https://reqres.in/api/login",
      {
        email: email,
        password: password,
      }
    );
    /** Token temporal */
    sessionStorage.setItem("token", "user");
=======
    const user = await axios.post(MAIN_API.length !== 0 ?  
        MAIN_API.concat(ROUTE_LOGIN) : 'https://reqres.in/api/login', {
      email: email,
      password: password,
    });
>>>>>>> 0bcc147bd6985dddadfe01ee030cfbf88dcf4dfd
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
<<<<<<< HEAD
    const newUser = await axios.post(
      MAIN_API.length !== 0
        ? MAIN_API.concat(ROUTE_REGISTER)
        : "https://reqres.in/api/register",
      {
        firstName: firstName,
        lastName: lastName,
        idPassport: idPassport,
        email: email,
        password: password,
        avatar: avatar,
        account: account,
      }
    );
    /** Token temporal */
    sessionStorage.setItem("token", "user");
=======
    const newUser = await axios.post( MAIN_API.length !== 0 ?  
        MAIN_API.concat(ROUTE_REGISTER) : 'https://reqres.in/api/register',
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
>>>>>>> 0bcc147bd6985dddadfe01ee030cfbf88dcf4dfd
    return newUser;
  } catch (error) {
    navigateToErrorPage(error.message);
    throw error;
  }
};

export { login, register };
