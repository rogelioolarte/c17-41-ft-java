import axios from "axios";

const login = async (email, password, navigateToErrorPage) => {
  try {
    const user = await axios.post("https://localhost:8080/api/user/login", {
      email: email,
      password: password,
    });
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
      "https://localhost:8080/api/user/register",
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
    return newUser;
  } catch (error) {
    navigateToErrorPage(error.message);
    throw error;
  }
};

export { login, register };
