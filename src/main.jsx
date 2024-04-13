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
import { UserProvider } from "./contexts/user.context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/home" />},
      { path: "/home", element: <ProtectedRoute redirectTo={<HomePage />}
          element={<Navigate to="/dashboard" />} />  },
      { path: "/dashboard", element: <ProtectedRoute redirectTo={<Navigate to="/login" />} 
          element={<DashboardPage />} />, children: [
          { path: "/dashboard", element: <Navigate to="/dashboard/offer" /> },
          { path: "/dashboard/offer", element: <ProtectedRoute redirectTo={<Navigate to="/login" />} 
              element={<CreateOffer />} /> },
          { path: "/dashboard/history", element: <ProtectedRoute redirectTo={<Navigate to="/login" />} 
              element={<ShowHistory />} /> },
        ],
      },
      { path: "/wallet", element: <ProtectedRoute redirectTo={<Navigate to="/login" />} 
          element={<WalletPage />} /> },
      { path: "/config", element: <ProtectedRoute redirectTo={<Navigate to="/login" />} 
          element={<ConfigSection />} /> },
    ],
  },
  { path: "/login", element: <ProtectedRoute redirectTo={<LoginPage />}  
      element={<Navigate to="/dashboard" />}  /> },
  { path: "/register", element: <ProtectedRoute redirectTo={<RegisterPage />}
      element={<Navigate to="/dashboard" />} /> },
  { path: "/recover", element: <ProtectedRoute redirectTo={<RecoverPage />}
      element={<Navigate to="/dashboard" />} /> },
  { path: "/error", element: <ErrorPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
    
);
