import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

function useProtectedRoute() {
  const { loggedUser } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(loggedUser.id);

  useEffect(() => {
    if (
      loggedUser.id !== "" &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      navigate("/");
    } else if (
      loggedUser.id === "" &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      navigate("/login");
    }
  }, [loggedUser, location.pathname, navigate]);

  return;
}

export default useProtectedRoute;
