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
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  { path:'/', Component: App, children: [
    { path: '/', Component: HomePage, index: true },
    { path: '/home', Component: HomePage },
    { path:'/dashboard', Component: DashboardPage },
    { path:'/wallet', Component: WalletPage },
    
  ]},
  { path:'/login', Component: LoginPage },
  { path:'/register', Component: RegisterPage },
  { path:'*', Component: NotFoundPage },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<ErrorPage />}/>
  </React.StrictMode>,
)
