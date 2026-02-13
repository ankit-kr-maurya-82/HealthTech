import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'
import UserContextProvider from './assets/context/UserContext'

const Layout = () => {
    const location = useLocation();
     const hideHeader =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/register");

  return (
    <>
    <UserContextProvider>
        {!hideHeader && <Header />}
        {/* {!hideHeader && <Sidebar />} */}

        <main>
          <Outlet />
        </main>
      </UserContextProvider>
    </>
  )
}

export default Layout
