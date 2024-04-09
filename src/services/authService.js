import axios from "axios";

const login = async (email, password, navigateToErrorPage) => {
  try {
    const user = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });
    console.log(user);
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
  account,
  navigateToErrorPage
) => {
  try {
    const newUser = await axios.post("https://reqres.in/api/register", {
      firstName: firstName,
      lastName: lastName,
      idPassport: idPassport,
      email: email,
      password: password,
      account: account,
    });
    return newUser;
  } catch (error) {
    navigateToErrorPage(error.message);
    throw error;
  }
};

export { login, register };
