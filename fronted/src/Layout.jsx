import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'

const Layout = () => {
  return (
    <>
    {/* <Sidebar/> */}
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
