import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Dashboard from './pages/DashboardPage.jsx'
import Wallet from './pages/WalletPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import NotFound from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  { path:'', element:<App/>,children: [
    { path:'',  element:<HomePage/> },
    { path:'login', element:<LoginPage/> },
    { path:'register', element:<RegisterPage/> },
    { path:'dashboard', element:<Dashboard/> },
    { path:'wallet', element:<Wallet/> },
  ]},
  { path:'*', element:<NotFound/> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
