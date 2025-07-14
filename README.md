# 🛡️ Client Risk Analyzer

A full-stack web application that allows users to upload a CSV of client transactions, analyze potential risks, and identify high-risk clients based on transaction amounts. Built to simulate a real-world Deloitte-style consulting tool.

![Screenshot](https://via.placeholder.com/1200x600.png?text=Client+Risk+Analyzer+Demo)

---

## 🚀 Features

- 📁 CSV Upload for transaction data
- 📊 Risk detection based on transaction amount
- 📧 Email alerts for high-risk clients
- 📈 Dashboard showing all and high-risk clients
- 🛠️ Built with React, Node.js, Express, and CSV parser

---

## 📂 Project Structure

```
ClientRiskAnalyzer/
├── server/                # Node.js + Express backend
│   └── index.js           # Upload logic & risk analysis
├── client-risk-analyzer/  # React frontend
│   └── src/
│       └── App.js         # Main frontend logic
├── sample-clients.csv     # Example CSV for testing
```

---

## 🧪 Sample CSV Format
```
name,amount
Client A,5000
Client B,12000
Client C,8000
Client D,20000
```

---

## 🛠 Tech Stack

- **Frontend**: React, Axios, Tailwind CSS (optional styling)
- **Backend**: Node.js, Express, Multer, CSV-Parser, Nodemailer
- **Deployment**: Vercel (frontend) + Render (backend)

---

## ⚙️ Local Setup

### Backend (Node.js)
```bash
cd server
npm install express cors multer csv-parser nodemailer
node index.js
```

> ✏️ Replace your Gmail credentials in `index.js` with real ones using [App Passwords](https://support.google.com/accounts/answer/185833)

### Frontend (React)
```bash
cd client-risk-analyzer
npm install
npm start
```

---

## 🌍 Deployment

### 🔹 Frontend (Vercel)
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo → Select `client-risk-analyzer` folder as root
3. Deploy

### 🔹 Backend (Render)
1. Go to [render.com](https://render.com)
2. Create new web service → Connect GitHub repo → Choose `server` folder
3. Set build command: `npm install`
4. Set start command: `node index.js`
5. Add environment variable for email config if needed

---

## 📧 Email Alerts
- Configured to notify via Gmail when high-risk clients (amount > 10,000) are detected
- Setup via Nodemailer in the backend

---

## 🎯 Why This Project?
This project demonstrates:
- Real-world business logic
- Consulting-style analysis
- Data parsing, processing & alerting
- Full-stack deployment experience

Perfect for roles in:
- Tech Consulting
- Data Analytics
- Full-Stack Development

---

## ✨ Author
**Shahid Afridi**

📫 [LinkedIn](https://www.linkedin.com/in/your-link)  |  🌐 [GitHub](https://github.com/code-with-shahid)

---

## 📝 License
MIT

---

Want to use this for Deloitte or consulting job applications? Fork it, deploy it, and show them what you can do 💼🚀
