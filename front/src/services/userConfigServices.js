import axios from "axios";
import { MAIN_API } from "../config/api_routes";

const updateUserInfo = async (
  id,
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
    const updatedUser = axios.put(MAIN_API.concat(`/api/user/register/${id}`), {
      firstName: firstName,
      lastName: lastName,
      dni: idPassport,
      email: email,
      password: password,
      avatar: avatar,
      cbuDollar: account,
    });
    return updatedUser;
  } catch (error) {
    navigateToErrorPage(error.message);
    throw error;
  }
};

export { updateUserInfo };
