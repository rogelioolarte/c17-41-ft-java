import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import WalletPage from './pages/WalletPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  { path:'', element:<App/>,children: [
    { path:'',  element:<HomePage/> },
    { path:'dashboard', element:<DashboardPage/> },
    { path:'wallet', element:<WalletPage/> },
  ]},
  { path:'login', element:<LoginPage/> },
  { path:'register', element:<RegisterPage/> },
  { path:'*', element:<NotFoundPage/> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
