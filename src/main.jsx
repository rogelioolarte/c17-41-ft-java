<<<<<<< HEAD
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
=======
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import RecoverPage from './pages/RecoverPage.jsx'
import WalletPage from './pages/WalletPage.jsx'
import ShowHistory from './components/pure/ShowHistory.jsx'
import CreateOffer from './components/pure/forms/CreateOffer.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App/>, children: [
    { path: "/home", element: <Navigate to="/" /> },
    { path: "/", element: <HomePage/> },
    { path: "/dashboard", element: <DashboardPage/>, children: [
      { path: "/dashboard", element: <Navigate to="/dashboard/offer" />},
      { path: "/dashboard/offer", element: <CreateOffer/> },
      { path: "/dashboard/history", element: <ShowHistory/> },
    ]},
    { path: "/wallet", element: <WalletPage/> },
  ] },
  { path: "/login", element: <LoginPage/> },
  { path: "/register", element: <RegisterPage/> },
  { path: "/recover", element: <RecoverPage/> },
  { path: "*", element: <NotFoundPage/> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
>>>>>>> afa01279d093db74dc720ea6e66e0413566418cb
