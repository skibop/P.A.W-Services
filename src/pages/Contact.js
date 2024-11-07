import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    time: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      time: selectedTime,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "246fef84-d50e-43bd-9bc1-dbbc9b9c75f4",
        subject: "New Contact Form Submission from P.A.W Services",
        from_name: "P.A.W Services",
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        time: "",
      });
    } else {
      alert("Failed to send the message. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-red-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">P.A.W Services</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/reviews" className="hover:underline">Reviews</Link>
            <Link to="/team" className="hover:underline">Team</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="bg-red-500 text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl mb-8">Get in touch with P.A.W Services for all your needs</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left Side: Contact Info */}
              <div className="md:w-2/5">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-red-500 mr-4" />
                    <p>Scenic Parks Tennis Courts, Dayton, New Jersey</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-red-500 mr-4" />
                    <p>121.aryanb@gmail.com</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-red-500 mr-4" />
                    <p>(732) - 513 - 0017</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Hours:</p>
                      <p>Mon - Fri: 4:00 PM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Map */}
                <div className="mt-8">
                  <iframe
                    title="Scenic Parks Tennis Courts Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.319555394664!2d-74.5165844!3d40.3773956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c7b227c0223f%3A0x529317ce4577f632!2s35%20Scenic%20Dr%2C%20Dayton%2C%20NJ%2008810%2C%20USA!5e0!3m2!1sen!2sus!4v1696787486319!5m2!1sen!2sus"
                    className="w-full h-64 border-0 rounded-lg"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <div className="md:w-3/5">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Send Us a Message</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="(732) - 429 - 0817"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {availableTimes.length > 0 && (
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Available Times</label>
                      <select
                        id="time"
                        name="time"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={formData.time}
                        onChange={handleTimeChange}
                        required
                      >
                        <option value="">-- Select a Time --</option>
                        {availableTimes.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[120px]"
                      placeholder="Additional information"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 P.A.W Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;