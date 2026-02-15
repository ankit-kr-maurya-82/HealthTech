import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/layout/Header";
import PatientHeader from "./components/layout/PatientHeader";
import DoctorHeader from "./components/layout/DoctorHeader";
import Footer from "./components/layout/Footer";

import UserContext from "./context/UserContext";

const Layout = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  // Auth pages (login/register)
  const authRoutes = ["/login", "/register"];

  const isAuthPage = authRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  // Dashboard pages
  const isDashboard =
    location.pathname.startsWith("/patient") ||
    location.pathname.startsWith("/doctor");

  const hideHeader = isAuthPage;
  const hideFooter = isAuthPage || isDashboard;

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* ===== HEADER SECTION ===== */}
      {!hideHeader && !user && <Header />}
      {!hideHeader && user?.role === "patient" && <PatientHeader />}
      {!hideHeader && user?.role === "doctor" && <DoctorHeader />}

      {/* ===== MAIN CONTENT ===== */}
      <main>
        <Outlet />
      </main>

      {/* ===== FOOTER SECTION ===== */}
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
