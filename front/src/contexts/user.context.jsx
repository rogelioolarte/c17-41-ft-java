import { createContext, useEffect, useState } from "react";
import { User } from "../models/user.class";
import PropTypes from "prop-types";

const UserContext = createContext();

function UserProvider(props) {
  const savedUser = new User(JSON.parse(window.localStorage.getItem("user")));

  const [loggedUser, setLoggedUser] = useState(savedUser || new User());

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(loggedUser));
  }, [loggedUser]);

  console.log(loggedUser);

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

  console.log(loggedUser);

  return (
    <UserContext.Provider value={{ loggedUser, assignUserInfo, logUserOut }}>
      {props.children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

export { UserContext, UserProvider };
