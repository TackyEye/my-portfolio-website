"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          Have a project in mind? Let's work together. Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-8">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "observantmagic@outlook.com",
              href: "mailto:observantmagic@outlook.com",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+91 9987117796",
              href: "tel:+15551234567",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Pune, Maharashtra, India",
              href: null,
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex gap-4">
              <div className="flex-shrink-0">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-slate-600 dark:text-slate-400">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <p className="font-semibold mb-4">Connect on Social</p>
            <div className="flex gap-4">
              {[
                { name: "GitHub", url: "https://github.com/TackyEye" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/rishav-bhattacharya-b3aa12198/" },
                { name: "HackerRank", url: "https://www.hackerrank.com/profile/observantmagic1" },
              ].map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send size={18} />}
            </button>

            {/* Success Message */}
            {submitted && (
              <div className="p-4 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 rounded-lg">
                ✓ Thank you! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
