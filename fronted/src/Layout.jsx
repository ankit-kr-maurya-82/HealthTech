import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import UserContext from './context/UserContext';

const Layout = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  const hideRoutes = ["/login", "/register", "/doctor-register"];

  const hideHeader = hideRoutes.includes(location.pathname);
  const hideFooter = hideRoutes.includes(location.pathname);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {!hideHeader && <Header />}
      {/* {!hideHeader && <Sidebar />} */}

      <main>
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </UserContext.Provider>
  );
};

export default Layout;
