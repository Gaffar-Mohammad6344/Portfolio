/**
 * Run this FIRST to verify your credentials work:
 *   node test-smtp.js
 *
 * If it prints ✅ — your .env is correct, server.js will work.
 * If it prints ❌ — fix the error shown before starting the server.
 */
require("dotenv").config();
const nodemailer = require("nodemailer");

const { EMAIL_USER, EMAIL_PASS } = process.env;

if (!EMAIL_USER || !EMAIL_PASS || EMAIL_PASS === "paste_your_16_char_app_password_here") {
  console.error("❌ Fill in EMAIL_USER and EMAIL_PASS in your .env file first!");
  process.exit(1);
}

console.log("Testing SMTP connection...");
console.log("EMAIL_USER:", EMAIL_USER);
console.log("EMAIL_PASS:", "*".repeat(EMAIL_PASS.length));

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  tls: { rejectUnauthorized: false },
});

transporter.verify((err) => {
  if (err) {
    console.error("\n❌ SMTP verification FAILED:");
    console.error("   Error code:", err.code);
    console.error("   Message:", err.message);
    console.log("\n── Common fixes ────────────────────────────────────");
    console.log("1. Wrong password → Go to https://myaccount.google.com/apppasswords");
    console.log("   Generate a NEW App Password, paste it in .env (no spaces)");
    console.log("2. 2FA not enabled → Enable at https://myaccount.google.com/signinoptions/two-step-verification");
    console.log("3. Using login password → You MUST use App Password, not your Gmail password");
    console.log("4. Less secure app access won't work → App Password is the correct method");
  } else {
    console.log("\n✅ SMTP connection successful!");
    console.log("   Sending a test email to yourself...");

    transporter.sendMail({
      from:    `"Test" <${EMAIL_USER}>`,
      to:      EMAIL_USER,
      subject: "✅ Portfolio Contact Form — Test Email",
      text:    "If you see this, your email setup is working correctly!",
    }, (sendErr, info) => {
      if (sendErr) {
        console.error("❌ Send failed:", sendErr.message);
      } else {
        console.log("✅ Test email sent! Check your inbox.");
        console.log("   Message ID:", info.messageId);
      }
    });
  }
});
