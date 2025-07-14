const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 5000;

app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      const riskyClients = results.filter((client) => parseFloat(client.amount) > 10000);

      if (riskyClients.length > 0) {
        const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


        const mailOptions = {
          from: "Client Risk Analyzer",
          to: "your_email@gmail.com",
          subject: "Risk Alert: High-Risk Clients Identified",
          text: `Found ${riskyClients.length} risky clients. Immediate action recommended.`,
        };

        transporter.sendMail(mailOptions);
      }

      res.json({ clients: results, riskyClients });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
