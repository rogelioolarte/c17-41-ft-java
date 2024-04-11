import { createContext } from "react";
import PropTypes from "prop-types";
import useString from "../../hooks/useString";

const UserContext = createContext();

function UserProvider(props) {
  //campos de info de usuario
  const [userId, changeUserId] = useString("");
  const [firstName, changeFirstName] = useString("");
  const [lastName, changeLastName] = useString("");
  const [idPassport, changeIdPassport] = useString("");
  const [email, changeEmail] = useString("");
  const [avatar, changeAvatar] = useString("");
  const [account, changeAccount] = useString("");

  const assignUserInfo = (user) => {
    changeUserId(user.id);
    changeFirstName(user.firstName);
    changeLastName(user.lastName);
    changeIdPassport(user.idPassport);
    changeEmail(user.email);
    changeAvatar(user.avatar);
    changeAccount(user.account);
  };

  const userInfo = [
    userId,
    firstName,
    lastName,
    idPassport,
    email,
    avatar,
    account,
  ];

  return (
    <UserContext.Provider value={{ userInfo, assignUserInfo }}>
      {props.children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

export { UserContext, UserProvider };
