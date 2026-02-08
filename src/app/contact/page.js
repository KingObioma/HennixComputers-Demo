"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-hennix-dark border-b border-hennix-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have a question? Need a custom quote? Want to check stock? We respond
            fast because we know your time is valuable. Reach out and
            let&apos;s get you sorted.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* ===== LEFT: Contact Info ===== */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-hennix-orange/10 text-hennix-orange flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Visit Our Shop</h3>
                  <p className="text-gray-400 text-sm">
                    4 Pepple Street, Computer Village,
                    <br />
                    Ikeja, Lagos State, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-hennix-orange/10 text-hennix-orange flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">
                    Call / WhatsApp
                  </h3>
                  <p className="text-gray-400 text-sm">08115739933</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Available Mon — Sat, 8AM — 7PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-hennix-orange/10 text-hennix-orange flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email Us</h3>
                  <p className="text-gray-400 text-sm">
                    info@hennixcomputers.com
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    We reply within a few hours
                  </p>
                </div>
              </div>
            </div>

            {/* Quick message */}
            <div className="mt-10 bg-hennix-orange/5 border border-hennix-orange/20 rounded-xl p-5">
              <h3 className="text-hennix-orange font-semibold text-sm mb-2">
                Why customers love reaching out to us:
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-hennix-orange mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  No pressure — honest advice on the right laptop for your needs
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-hennix-orange mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Custom quotes for bulk or corporate orders
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-hennix-orange mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Fast replies — we don&apos;t leave you hanging
                </li>
              </ul>
            </div>
          </div>

          {/* ===== RIGHT: Contact Form ===== */}
          <div className="lg:col-span-3">
            <div className="bg-hennix-dark border border-hennix-gray rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you
                    within a few hours. For urgent inquiries, WhatsApp us at{" "}
                    <span className="text-white font-medium">08115739933</span>.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-white mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    Fill out the form below and we&apos;ll get back to you
                    shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="08X XXXX XXXX"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a topic</option>
                          <option value="stock-check">
                            Check Stock / Availability
                          </option>
                          <option value="custom-quote">
                            Request a Custom Quote
                          </option>
                          <option value="bulk-order">
                            Bulk / Corporate Order
                          </option>
                          <option value="support">
                            After-Sales Support
                          </option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us what you need — laptop model, budget, quantity, or any questions..."
                        className="input-field resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full text-lg">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
