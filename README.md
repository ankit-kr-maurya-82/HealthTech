
# Heatlhcare

## git
git branch your branch_name<br>
git checkout branch_name

### team   branch name
Bhrantik - fronted-one<br>
Anshumaan - fronted-two<br>
Harsh - backend<br>

### git push and pull
git push origin (branch_name)   // your branch name<br>
git pull origin (branch_name)   // your branch name

### git control
git add . <br>
git commit -m "jo bhi apna kiya hai wahi likhna hai"<br>
git push origin (branch_name)   // your branch name

## terminal
start a app<br>
cd fronted<br>
npm run dev

# 🏥 CareMe – Smart Digital Health Platform

CareMe is a HealthTech web application that connects **patients and doctors digitally**.  
Patients can submit health problems and receive **medicine, test, and diet advice** from doctors through a simple dashboard system.

Built for Hackathon MVP with a focus on:
- Preventive Healthcare
- Diet & Sugar Control
- Digital Doctor Consultation Workflow

---

## 🚀 Tech Stack

### 🎨 Frontend
- React.js
- Tailwind CSS
- Shadcn UI

### ⚙️ Backend
- Node.js
- Express.js
- JWT Authentication

### 🗄️ Database
- MongoDB (Mongoose)

---

## 📁 Project Structure

careme/ <br>
│<br>
├── client/                 # React Frontend<br>
│   ├── public/<br>
│   │<br>
│   └── src/<br>
│       ├── assets/         # images, icons<br>
│       ├── components/<br>
│       │   ├── layout/<br>
│       │   │   ├── Header.jsx<br>
│       │   │   ├── Footer.jsx<br>
│       │   │   └── Sidebar.jsx<br>
│       │   │<br>
│       │   ├── ui/<br>
│       │   │   ├── Button.jsx<br>
│       │   │   ├── Card.jsx<br>
│       │   │   └── Input.jsx<br>
│       │   │<br>
│       │   └── common/<br>
│       │       ├── FeatureCard.jsx<br>
│       │       ├── TestimonialCard.jsx<br>
│       │       └── StatusCard.jsx<br>
│       │<br>
│       ├── pages/<br>
│       │   ├── public/<br>
│       │   │   ├── Home.jsx<br>
│       │   │   ├── About.jsx<br>
│       │   │   └── Contact.jsx<br>
│       │   │<br>
│       │   ├── auth/<br>
│       │   │   ├── Login.jsx<br>
│       │   │   └── Register.jsx<br>
│       │   │<br>
│       │   ├── patient/<br>
│       │   │   ├── PatientDashboard.jsx<br>
│       │   │   ├── AddProblem.jsx<br>
│       │   │   ├── Advice.jsx<br>
│       │   │   └── Reminder.jsx<br>
│       │   │<br>
│       │   └── doctor/<br>
│       │       ├── DoctorDashboard.jsx<br>
│       │       ├── PatientDetails.jsx<br>
│       │       └── History.jsx<br>
│       │<br>
│       ├── routes/<br>
│       │   └── AppRoutes.jsx<br>
│       │<br>
│       ├── App.jsx<br>
│       └── main.jsx<br>
│<br>
├── server/                 # Node + Express Backend<br>
│   ├── controllers/<br>
│   │   ├── auth.controller.js<br>
│   │   ├── patient.controller.js<br>
│   │   └── doctor.controller.js<br>
│   │<br>
│   ├── models/<br>
│   │   ├── User.js<br>
│   │   ├── Problem.js<br>
│   │   └── Advice.js<br>
│   │<br>
│   ├── routes/<br>
│   │   ├── auth.routes.js<br>
│   │   ├── patient.routes.js<br>
│   │   └── doctor.routes.js<br>
│   │<br>
│   ├── middleware/<br>
│   │   └── auth.middleware.js<br>
│   │<br>
│   ├── config/<br>
│   │   └── db.js<br>
│   │<br>
│   ├── server.js<br>
│   └── app.js<br>
│<br>
└── README.md  <br>


---

## 👨‍⚕️ Core Features

### 🧍 Patient Panel
- Add health problems
- Upload reports
- View doctor advice
- Medicine reminders
- Diet tips

### 👨‍⚕️ Doctor Panel
- View patient requests
- Analyze symptoms
- Suggest medicines
- Recommend tests
- Provide diet & lifestyle advice

### 🌱 Health Logic
- Age-based diet suggestions
- Sugar intake monitoring
- Natural health guidance
- Preventive healthcare focus

---

## 🧪 MVP Scope (Hackathon)
✅ Login/Register  
✅ Patient Problem Submission  
✅ Doctor Advice Dashboard  
✅ Medicine + Diet Recommendation  
❌ Video Calls  
❌ Chat System  
❌ Payments  

---

