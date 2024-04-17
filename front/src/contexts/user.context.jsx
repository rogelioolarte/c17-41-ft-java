import { createContext, useEffect, useState } from "react";
import { User } from "../models/user.class";
import PropTypes from "prop-types";

const UserContext = createContext();

function UserProvider(props) {
  const [loggedUser, setLoggedUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? new User(JSON.parse(savedUser)) : new User();
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(loggedUser));
  }, [loggedUser]);

  console.log(localStorage.getItem("user"));

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
