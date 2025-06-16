
# 💧 Water Tracker – Frontend

A simple, beautiful, and responsive web app for tracking daily water intake, built with **React**, **Redux Toolkit**, and **SweetAlert2**. This app helps users stay hydrated by tracking their water intake, setting daily targets, and viewing their weekly progress.

---

## ✅ Features

- ➕ **Add Water Intake**  
  Users can add their water consumption using a custom input or one-click quick-add buttons (250ml, 500ml, etc.).

- 🎯 **Set Daily Goal (Target)**  
  Users can set a personalized water target (default is 2000 ml). It is stored in `localStorage` for persistence.

- 📊 **Today's Status**  
  - Consumed water vs. goal
  - Remaining water
  - Percentage of goal completed
  - Over-drinking detection and feedback

- 📅 **Weekly History View**  
  Shows the user’s water intake for each day of the week with:
  - Target
  - Intake
  - Remaining/Extra
  - Percentage Progress

- 🎨 **Responsive UI**  
  Styled with clean layout and alert dialogs using SweetAlert2.

---

## ✨ Upcoming Improvements

- 🔐 User login & registration (JWT-based)
- 📱 Mobile responsive layout
- 🔔 Daily reminder popups
- 📈 Progress circle/ring indicator
- ☁️ Save target in backend (instead of localStorage)
- 🧪 Unit testing with Jest and React Testing Library

---

## 🛠️ How to Run the Project

### 1. Clone the Repository
git clone https://github.com/your-username/water-tracker-frontend.git
cd water-tracker-frontend

2. Install Dependencies
npm install

3. Start the Development Server
npm run dev
Open your browser and go to: http://localhost:5173

📦 Main Dependencies
Install manually if needed:
npm install react react-dom react-redux @reduxjs/toolkit react-router-dom sweetalert2
Make sure you have Node.js and Vite installed.

🔗 Backend API Requirements
Ensure the Spring Boot backend is running at:

http://localhost:9878/WaterApplication-backend
API Endpoints Used:
Method	Endpoint	Description
POST	/api/water/add	Add water intake
GET	/api/water/status	Get today’s status
GET	/api/water/history	Fetch weekly history

📁 Folder Structure

src/
├── components/
│   ├── AddWater.js          # Add water screen
│   ├── Status.js            # Daily status screen
│   └── History.js           # Weekly history
├── features/
│   └── waterSlice.js        # Redux slice for water actions
├── App.js                   # Main router
├── index.js                 # React root
└── store.js                 # Redux store setup
🖼️ Screenshots
➕ Add Water Page
Add water using custom input or quick-add buttons. Set your goal here too.


📊 Status Page
View how much you've drunk, how much is left, and whether you're above or below the target.


📅 Weekly History Page
View a full breakdown of water consumption for each day of the week.
