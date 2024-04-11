import { Outlet } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import "./App.css";

import NavBar from "./components/container/NavBar";

function App() {
  return (
    <div>
      <UserProvider>
        <NavBar />
        <Outlet />
      </UserProvider>
    </div>
  );
}

export default App;
