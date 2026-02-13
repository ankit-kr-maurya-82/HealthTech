import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import UserContext from "./context/UserContext";

const Layout = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  // Routes where header/footer should be hidden
  const hideRoutes = ["/login", "/register", "/doctor-register"];

  const hideHeader = hideRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  // Footer is only hidden on auth pages, not for logged-in users
  const hideFooter = hideHeader;

  // Wait until user data is loaded
  if (loading) return null;

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
