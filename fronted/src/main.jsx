import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/public/Home.jsx'
import About from './pages/public/About.jsx'
import Contact from './pages/public/Contact.jsx'
import Register from './pages/auth/Register.jsx'
import DoctorRegister from './pages/auth/DoctorRegister.jsx'
import PatientRegister from './pages/auth/PatientRegister.jsx'
import DoctorLogin from './pages/auth/DoctorLogin.jsx'
import PatientLogin from './pages/auth/PatientLogin.jsx'
import Team from './pages/public/Team.jsx'
import Github, { githubInfoLoader } from './pages/public/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="team" element={<Team/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="register/doctor" element={<DoctorRegister/>}/>
      <Route path="login/doctor" element={<DoctorLogin/>}/>
      <Route path="register/patient" element={<PatientRegister/>}/>
      <Route path="login/patient" element={<PatientLogin/>}/>
      <Route
      loader={githubInfoLoader}
      path="github" element={<Github/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <RouterProvider router={router}/>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
