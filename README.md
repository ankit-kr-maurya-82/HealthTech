
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

careme/
│
├── client/                 # React Frontend
│   ├── public/
│   │
│   └── src/
│       ├── assets/         # images, icons
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.jsx
│       │   │   ├── Footer.jsx
│       │   │   └── Sidebar.jsx
│       │   │
│       │   ├── ui/
│       │   │   ├── Button.jsx
│       │   │   ├── Card.jsx
│       │   │   └── Input.jsx
│       │   │
│       │   └── common/
│       │       ├── FeatureCard.jsx
│       │       ├── TestimonialCard.jsx
│       │       └── StatusCard.jsx
│       │
│       ├── pages/
│       │   ├── public/
│       │   │   ├── Home.jsx
│       │   │   ├── About.jsx
│       │   │   └── Contact.jsx
│       │   │
│       │   ├── auth/
│       │   │   ├── Login.jsx
│       │   │   └── Register.jsx
│       │   │
│       │   ├── patient/
│       │   │   ├── PatientDashboard.jsx
│       │   │   ├── AddProblem.jsx
│       │   │   ├── Advice.jsx
│       │   │   └── Reminder.jsx
│       │   │
│       │   └── doctor/
│       │       ├── DoctorDashboard.jsx
│       │       ├── PatientDetails.jsx
│       │       └── History.jsx
│       │
│       ├── routes/
│       │   └── AppRoutes.jsx
│       │
│       ├── App.jsx
│       └── main.jsx
│
├── server/                 # Node + Express Backend
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── patient.controller.js
│   │   └── doctor.controller.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Problem.js
│   │   └── Advice.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── patient.routes.js
│   │   └── doctor.routes.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── server.js
│   └── app.js
│
└── README.md  


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

