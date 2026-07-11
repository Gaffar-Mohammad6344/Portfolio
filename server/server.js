const express    = require("express");
const nodemailer = require("nodemailer");
const cors       = require("cors");
require("dotenv").config();

const app = express();

// ── Middleware ──────────────────────────────────────────────
app.use(express.json());
app.use(cors({
  origin: "*",          // allow all origins during dev
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

// ── Verify env vars on startup ──────────────────────────────
console.log("EMAIL_USER loaded:", !!process.env.EMAIL_USER);
console.log("EMAIL_PASS loaded:", !!process.env.EMAIL_PASS);

// ── Nodemailer transporter ──────────────────────────────────
// Using explicit SMTP config instead of service:"gmail"
// This avoids common auth issues
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,           // true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,  // helps in some network environments
  },
});

// ── Verify transporter on startup ──────────────────────────
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error.message);
    console.error("   → Make sure EMAIL_USER and EMAIL_PASS are correct in .env");
    console.error("   → EMAIL_PASS must be a Gmail App Password, NOT your login password");
    console.error("   → Generate one at: https://myaccount.google.com/apppasswords");
  } else {
    console.log("✅ SMTP server connected — ready to send emails");
  }
});

// ── Health check ────────────────────────────────────────────
app.get("/api/health", (_, res) => {
  res.json({
    status: "ok",
    email_user_set: !!process.env.EMAIL_USER,
    email_pass_set: !!process.env.EMAIL_PASS,
  });
});

// ── POST /api/contact ───────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: "Invalid email address." });
  }

  try {
    // ── Email YOU receive ───────────────────────────────────
    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;background:#050816;color:#f8fafc;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08)">
          <div style="background:linear-gradient(135deg,#dc2626,#991b1b);padding:32px 40px">
            <h1 style="margin:0;font-size:22px;font-weight:900;letter-spacing:-0.5px">New Message — Portfolio</h1>
            <p style="margin:6px 0 0;opacity:.75;font-size:13px">Someone reached out through your contact form</p>
          </div>
          <div style="padding:36px 40px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
                <p style="margin:0 0 3px;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#64748b">From</p>
                <p style="margin:0;font-size:15px;font-weight:600">${name} &lt;${email}&gt;</p>
              </td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
                <p style="margin:0 0 3px;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#64748b">Subject</p>
                <p style="margin:0;font-size:15px;font-weight:600">${subject}</p>
              </td></tr>
              <tr><td style="padding:16px 0">
                <p style="margin:0 0 8px;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#64748b">Message</p>
                <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:20px">
                  <p style="margin:0;font-size:14px;line-height:1.75;white-space:pre-wrap">${message}</p>
                </div>
              </td></tr>
            </table>
          </div>
          <div style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);font-size:11px;color:#475569">
            Hit Reply to respond directly to ${name}
          </div>
        </div>
      `,
    });

    // ── Auto-reply to sender ────────────────────────────────
    await transporter.sendMail({
      from:    `"Gaffar Mohammad" <${process.env.EMAIL_USER}>`,
      to:      email,
      subject: `Got your message, ${name}! ✉️`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;background:#050816;color:#f8fafc;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08)">
          <div style="background:linear-gradient(135deg,#dc2626,#991b1b);padding:32px 40px">
            <h1 style="margin:0;font-size:22px;font-weight:900;letter-spacing:-0.5px">Message received! 🚀</h1>
            <p style="margin:6px 0 0;opacity:.75;font-size:13px">I'll get back to you shortly</p>
          </div>
          <div style="padding:36px 40px">
            <p style="margin:0 0 16px;font-size:15px;line-height:1.7">Hey <strong>${name}</strong>,</p>
            <p style="margin:0 0 16px;font-size:14px;line-height:1.7;color:#cbd5e1">Thanks for reaching out! I've received your message and will reply within 24–48 hours.</p>
            <div style="background:rgba(255,255,255,0.04);border-left:3px solid #dc2626;border-radius:0 10px 10px 0;padding:16px 20px;margin:20px 0">
              <p style="margin:0 0 4px;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#64748b">Your message</p>
              <p style="margin:0;font-size:13px;line-height:1.6;color:#94a3b8;white-space:pre-wrap">${message}</p>
            </div>
            <p style="margin:0;font-size:13px;color:#64748b">
              Check out my work on <a href="https://github.com/Gaffar-Mohammad6344" style="color:#ef4444">GitHub</a> or connect on
              <a href="https://www.linkedin.com/in/gaffar-mohammad-160b16264/" style="color:#ef4444">LinkedIn</a>.
            </p>
          </div>
          <div style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);font-size:11px;color:#475569">
            — Gaffar Mohammad · Software Engineer at L&T Mindtree
          </div>
        </div>
      `,
    });

    console.log(`✅ Email sent — from: ${name} <${email}>`);
    res.status(200).json({ success: true, message: "Message sent successfully!" });

  } catch (err) {
    // Log the FULL error so you can see exactly what's wrong
    console.error("❌ Mail send error:");
    console.error("   Code:", err.code);
    console.error("   Message:", err.message);
    console.error("   Response:", err.response);

    // Return the actual error message in dev so you can debug
    res.status(500).json({
      success: false,
      error: "Failed to send email. Please try again.",
      // Only shown in dev — remove before production
      debug: process.env.NODE_ENV !== "production" ? err.message : undefined,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`\n🚀 Server running on http://localhost:${PORT}\n`));
