import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import UserContext from "./context/UserContext";

const Layout = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  // routes jahan header/footer hide karna hai
  const hideRoutes = ["/login", "/register", "/doctor-register"];

  const hideHeader = hideRoutes.some((route) =>
    location.pathname.startsWith(route)
  );
  const hideFooter = hideHeader || !!user; // hide footer on auth pages or if user is logged in

  // optional: wait until context loaded
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
