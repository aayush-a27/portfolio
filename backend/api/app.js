require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;  // Default port if not found in .env

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email sending endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: "aayushbhadula567@gmail.com", 
      pass: "xhfq gxkk hnad qsjy", 
    },
  });

  // Email options
  const mailOptions = {
    from: email, 
    to: "aayushbhadula567@gmail.com", 
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
const serverless = require('serverless-http');
module.exports = serverless(app);