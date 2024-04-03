import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import NavBar from './components/container/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import WalletPage from './pages/WalletPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home'  Component={HomePage} />
            <Route path='/dashboard' Component={DashboardPage} ></Route>
            <Route path='/wallet' Component={WalletPage} />
          <Route path='/login' Component={LoginPage} />
          <Route path='/register' Component={RegisterPage} />
          <Route path='*' Component={NotFoundPage} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
