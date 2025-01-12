"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [fromNumber, setFromNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phone);
  };

  const handleEmail = () => {
    const newErrors: { email?: string; phone?: string } = {};

    if (!validateEmail(fromEmail)) {
      newErrors.email = "Invalid email address";
    }

    if (!validatePhone(fromNumber)) {
      newErrors.phone = "Invalid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    const templateParams = {
      from_name: fromName,
      from_email: fromEmail,
      from_number: fromNumber,
      message,
    };

    // Replace emailjs logic with actual implementation or mock it
    setTimeout(() => {
      console.log("Email sent successfully", templateParams);
      alert("Message sent successfully!");
      setLoading(false);
    }, 2000);
  };

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">We'd love to hear from you!</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={fromNumber}
                  onChange={(e) => setFromNumber(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            ></textarea>
            <div className="text-center">
              <button
                type="button"
                onClick={handleEmail}
                disabled={loading}
                className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {loading ? "Sending..." : "Contact Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
