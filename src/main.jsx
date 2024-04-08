
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import RecoverPage from './pages/RecoverPage.jsx'
import WalletPage from './pages/WalletPage.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App/>, children: [
    { path: "/home", element: <Navigate to="/" /> },
    { path: "/", element: <HomePage/> },
    { path: "/dashboard", element: <DashboardPage/>},
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
