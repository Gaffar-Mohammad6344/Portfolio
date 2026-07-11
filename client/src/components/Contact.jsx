import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaInstagram,
  FaEnvelope, FaPaperPlane, FaCopy, FaCheck,
} from "react-icons/fa";
import { FiLoader, FiCheckCircle, FiXCircle } from "react-icons/fi";

// ── Change this to your deployed backend URL in production ──
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ── Input component ─────────────────────────────────────────
const Field = ({ label, error, children }) => (
  <div className="space-y-1.5">
    <label
      className="ml-1 text-[10px] font-bold uppercase tracking-widest"
      style={{ color: "var(--text-muted)" }}
    >
      {label}
    </label>
    {children}
    {error && (
      <p className="ml-1 text-[11px] text-red-400 font-medium">{error}</p>
    )}
  </div>
);

const inputClass =
  "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-red-500/60 focus:ring-1 focus:ring-red-500/30";

// ── Main component ──────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");
  const [copied, setCopied] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("gaffarmohammad6344@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ── Validation ────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    else if (form.message.trim().length < 10) e.message = "Message is too short (min 10 chars).";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ── Submit ────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setServerError(err.message || "Failed to send. Please try again.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setServerError("");
    setErrors({});
  };

  // ── Shared input styles ───────────────────────────────────
  const inputStyle = {
    background: "var(--input-bg)",
    borderColor: "var(--input-border)",
    color: "var(--text-primary)",
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full blur-[120px]" style={{ background: "rgba(220,38,38,0.04)" }} />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full blur-[120px]" style={{ background: "rgba(220,38,38,0.04)" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 items-start">

          {/* ── Left column ─────────────────────────────── */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 mb-4">
                Availability: Open for Projects
              </span>
              <h2 className="text-5xl font-black lg:text-6xl tracking-tighter" style={{ color: "var(--text-primary)" }}>
                Let's Build <br />
                <span className="text-red-500">Something Great.</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed max-w-sm" style={{ color: "var(--text-muted)" }}>
                I'm interested in freelance opportunities, large projects, or just a friendly tech chat.
              </p>
            </motion.div>

            {/* Email copy card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-md cursor-pointer transition-all"
              style={{ borderColor: "var(--border-color)", background: "var(--bg-card)" }}
              onClick={copyEmail}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                  <FaEnvelope />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "var(--text-muted)" }}>Official Mail</p>
                  <p className="font-medium text-sm truncate" style={{ color: "var(--text-primary)" }}>
                    gaffarmohammad6344@gmail.com
                  </p>
                </div>
                <div className="transition-colors group-hover:text-red-500" style={{ color: "var(--text-muted)" }}>
                  {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                </div>
              </div>
            </motion.div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FaGithub />,   link: "https://github.com/Gaffar-Mohammad6344" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/gaffar-mohammad-160b16264/" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/" },
              ].map((s, i) => (
                <a key={i} href={s.link} target="_blank" rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:border-red-500/50 hover:text-red-500 hover:-translate-y-1"
                  style={{ borderColor: "var(--border-color)", background: "var(--social-bg)", color: "var(--text-muted)" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column: Form ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="group lg:col-span-7 relative rounded-[2rem] border p-8 lg:p-10 backdrop-blur-2xl transition-all duration-500"
            style={{ borderColor: "var(--border-color)", background: "var(--bg-card)" }}
          >
            {/* Mouse spotlight */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(239,68,68,0.06), transparent 80%)`,
              }}
            />

            {/* ── SUCCESS STATE ── */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center justify-center gap-6 py-16 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  <FiCheckCircle size={42} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Message Sent! 🎉</h3>
                  <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)" }}>
                    Thanks for reaching out. I've received your message and you'll also get a confirmation email shortly.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="rounded-xl border px-6 py-2.5 text-sm font-bold transition-all hover:border-red-500/50 hover:text-red-500"
                  style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
                >
                  Send Another
                </button>
              </motion.div>
            )}

            {/* ── ERROR STATE ── */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center justify-center gap-6 py-16 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                  <FiXCircle size={42} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Oops! Failed to Send</h3>
                  <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)" }}>
                    {serverError || "Something went wrong. Please try again or email me directly."}
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="rounded-xl bg-red-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-red-700"
                >
                  Try Again
                </button>
              </motion.div>
            )}

            {/* ── FORM ── */}
            {(status === "idle" || status === "loading") && (
              <form className="relative z-10 grid gap-5" onSubmit={handleSubmit} noValidate>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name" error={errors.name}>
                    <input
                      name="name" type="text" placeholder="John Doe"
                      value={form.name} onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, borderColor: errors.name ? "#f87171" : "var(--input-border)" }}
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      name="email" type="email" placeholder="john@example.com"
                      value={form.email} onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, borderColor: errors.email ? "#f87171" : "var(--input-border)" }}
                    />
                  </Field>
                </div>

                <Field label="Subject" error={errors.subject}>
                  <input
                    name="subject" type="text" placeholder="How can I help you?"
                    value={form.subject} onChange={handleChange}
                    className={inputClass}
                    style={{ ...inputStyle, borderColor: errors.subject ? "#f87171" : "var(--input-border)" }}
                  />
                </Field>

                <Field label="Message" error={errors.message}>
                  <textarea
                    name="message" rows="5" placeholder="Tell me about your project..."
                    value={form.message} onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    style={{ ...inputStyle, borderColor: errors.message ? "#f87171" : "var(--input-border)" }}
                  />
                </Field>

                {/* Character count */}
                <p className="text-right text-[10px] -mt-3" style={{ color: "var(--text-muted)" }}>
                  {form.message.length} / 1000
                </p>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 flex items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition-all hover:bg-red-700 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-red-600 disabled:active:scale-100"
                >
                  {status === "loading" ? (
                    <>
                      <FiLoader size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
