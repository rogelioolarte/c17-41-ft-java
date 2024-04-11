import axios from "axios";

const updateUserInfo = async (
  id,
  firstName,
  lastName,
  idPassport,
  email,
  avatar,
  account,
  navigateToErrorPage
) => {
  try {
    const updatedUser = axios.put(`https://localhost:8080/api/user/${id}`, {
      firstName: firstName,
      lastName: lastName,
      idPassport: idPassport,
      email: email,
      avatar: avatar,
      account: account,
    });
    return updatedUser;
  } catch (error) {
    navigateToErrorPage(error.message);
    throw error;
  }
};

export { updateUserInfo };
