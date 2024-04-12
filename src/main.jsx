import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import RecoverPage from "./pages/RecoverPage.jsx";
import WalletPage from "./pages/WalletPage.jsx";
import ShowHistory from "./components/container/ShowHistory.jsx";
import CreateOffer from "./components/pure/forms/CreateOffer.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ConfigSection from "./components/container/configSection.jsx";
import ProtectedRoute from "./components/container/ProtectedRoute.jsx";
import { TOKEN_GET } from "./config/token.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/home" />},
      { path: "/home", element: <HomePage /> },
      { path: "/dashboard", element: <ProtectedRoute isAllowed={ TOKEN_GET || false } 
          redirectTo="/login" element={<DashboardPage />} />, children: [
          { path: "/dashboard", element: <Navigate to="/dashboard/offer" /> },
          { path: "/dashboard/offer", element: <CreateOffer /> },
          { path: "/dashboard/history", element: <ShowHistory /> },
        ],
      },
      { path: "/wallet", element: <ProtectedRoute isAllowed={ TOKEN_GET || false } 
          redirectTo="/login" element={<WalletPage />} /> },
      { path: "/config", element: <ProtectedRoute isAllowed={ TOKEN_GET || false } 
          redirectTo="/login" element={<ConfigSection />} /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/recover", element: <RecoverPage /> },
  { path: "/error", element: <ErrorPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
