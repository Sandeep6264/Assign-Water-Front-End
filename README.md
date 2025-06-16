💧 Water Tracker – Frontend (React JS + Redux)
A clean and minimal water tracking web app where users can add water intake, view status, set custom goals, and track weekly history.

🖼️ UI Screens
🏠 Home
Navigation to Add Water, Status, and History

➕ Add Water

Enter custom amount or use quick-add buttons (250ml, 500ml, etc.)

Set your daily goal (default is 2000ml)

Saved using localStorage for persistence

Displays alerts (success/failure) using SweetAlert

📊 Status

Displays today’s intake

Shows:

Consumed water

Target (custom or default)

Remaining

Percentage completed

Overdrink alert if user exceeded goal

📅 History

Weekly breakdown of water intake by day

Shows each day's:

Quantity consumed

Target

Remaining/Extra

Percentage status

⚙️ Technologies Used
React JS

Redux Toolkit

React Router

SweetAlert2 for user alerts



🧠 Core Functionalities
🔁 Add Water Intake
dispatch(fetchWaterDetails(quantity)).unwrap().then((res) => {
  // Handles success or failure
});
🎯 Set Daily Goal (Target)

const [target, setTarget] = useState( 2000);

const handleTargetChange = (e) => {
  setTarget(e.target.value);
};
✅ Quick Add Buttons
[250, 500, 750, 1000].map(val => (
  <button onClick={() => handleAdd(val)}>+{val} ml</button>
));
📈 Status Calculation

const percent = Math.round((item.userQty / userTarget) * 100);
📦 Folder Structure
src/
├── components/
│   ├── AddWater.js
│   ├── Status.js
│   └── History.js
├── features/
│   └── waterSlice.js
├── App.js
├── index.js
└── store.js
🧪 Sample waterSlice.js

export const fetchWaterDetails = createAsyncThunk("water/add", async (data) => {
  const response = await fetch("http://localhost:9878/WaterApplication-backend/api/water/add", {
    method: "POST",
    body: JSON.stringify({ userQty: data }),
    headers: { 'Content-Type': "application/json" },
    credentials: 'include'
  });
  return await response.json();
});
🧾 Sample API Response Used by Frontend

[
  {
    "wid": 222,
    "userQty": 500,
    "defaultQty": 2000,
    "remainQty": 1500,
    "day": "WEDNESDAY"
  },
  {
    "wid": 353,
    "userQty": 2100,
    "defaultQty": 2000,
    "remainQty": -100,
    "day": "TUESDAY"
  }
]
🚀 Future Enhancements
User login/registration

Mobile responsiveness

Toast notifications

Progress rings

Reminders for low intake
