import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import UserContext from "./context/UserContext";

const Layout = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  const hideRoutes = ["/login", "/register", "/doctor-register"];

  const hideHeader = hideRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  // hide footer on auth pages + after login
  const hideFooter = hideHeader || user;

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {!hideHeader && <Header />}
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};


export default Layout;
