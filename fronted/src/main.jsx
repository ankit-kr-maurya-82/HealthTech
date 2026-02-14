import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/public/Home.jsx";
import About from "./pages/public/About.jsx";
import Contact from "./pages/public/Contact.jsx";
import Register from "./pages/auth/Register.jsx";
import DoctorRegister from "./pages/auth/DoctorRegister.jsx";
import PatientRegister from "./pages/auth/PatientRegister.jsx";
import DoctorLogin from "./pages/auth/DoctorLogin.jsx";
import PatientLogin from "./pages/auth/PatientLogin.jsx";
import Team from "./pages/public/Team.jsx";
import Github, { githubInfoLoader } from "./pages/public/Github.jsx";
import PatientDashboard from "./pages/patient/PatientDashboard.jsx";
import DoctorDashboard from "./pages/doctor/DoctorDashboard.jsx";
import UserProvider from "./context/UserContextProvider";
import PatientLayout from "./components/layout/PatientLayout.jsx";
import PatientProfile from "./pages/patient/PatientProfile.jsx";
import PatientAppointments from "./pages/patient/PatientAppointments.jsx";
import AddProblem from "./pages/patient/AddProblem.jsx";
import Advice from "./pages/patient/Advice.jsx";
import Reminder from "./pages/patient/Reminder.jsx";
import PatientMedicines from "./pages/patient/PatientMedicines.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="team" element={<Team />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<Register />} />
      <Route path="register/doctor" element={<DoctorRegister />} />
      <Route path="login/doctor" element={<DoctorLogin />} />
      <Route path="register/patient" element={<PatientRegister />} />
      <Route path="login/patient" element={<PatientLogin />} />
      <Route path="/patient" element={<PatientLayout />}>
        <Route path="dashboard" element={<PatientDashboard />} />
         <Route path="appointments" element={<PatientAppointments />} />
        <Route path="profile" element={<PatientProfile />} /> 
        <Route path="add-problem" element={<AddProblem />} />
        <Route path="advice" element={<Advice />} />
        <Route path="reminder" element={<Reminder />} />
        <Route path="medicines" element={<PatientMedicines />} />

      </Route>
      <Route path="doctor/dashboard" element={<DoctorDashboard />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
