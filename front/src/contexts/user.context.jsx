import { createContext } from "react";
import { User } from "../models/user.class";
import PropTypes from "prop-types";

const UserContext = createContext();

function UserProvider(props) {
  const loggedUser = new User();

  const assignUserInfo = (user) => {
    loggedUser.assignValues(
      user.id,
      user.firstName,
      user.lastName,
      user.idPassport,
      user.email,
      user.avatar,
      user.account,
      null,
      null
    );
  };

  return (
    <UserContext.Provider value={{ loggedUser, assignUserInfo }}>
      {props.children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

export { UserContext, UserProvider };
