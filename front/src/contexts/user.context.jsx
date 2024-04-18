import { createContext, useEffect, useState } from "react";
import { User } from "../models/user.class";
import PropTypes from "prop-types";

const UserContext = createContext();

function UserProvider(props) {
  const savedUser = new User(JSON.parse(localStorage.getItem("user")));

  const [loggedUser, setLoggedUser] = useState(savedUser || new User());

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(loggedUser));
  }, [loggedUser]);

  const assignUserInfo = (user) => {
    setLoggedUser((prevUser) => {
      return {
        ...prevUser,
        ...user,
      };
    });
  };

  const logUserOut = () => {
    setLoggedUser(new User());
  };

  return (
    <UserContext.Provider value={{ loggedUser, assignUserInfo, logUserOut, }}>
      {props.children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

export { UserContext, UserProvider };
