import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Helper function to convert 24-hour to 12-hour format for display purposes
const formatTime = (time) => {
  const [hour, minute] = time.split(":");
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12; // Convert to 12-hour format
  return `${formattedHour}:${minute} ${ampm}`;
};

// Function to get available times based on the day of the week
const getAvailableTimes = (day) => {
  const weekTimes = [...Array(5)].map((_, i) => `${16 + i}:00`); // Mon - Fri: 4:00 PM - 8:00 PM
  const saturdayTimes = [...Array(11)].map((_, i) => `${10 + i}:00`); // Saturday: 10:00 AM - 8:00 PM
  return day >= 1 && day <= 5 ? weekTimes : day === 6 ? saturdayTimes : [];
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: null,
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

  const handleDateChange = (date) => {
    const day = date.getDay(); // 0 = Sunday, 6 = Saturday
    setAvailableTimes(getAvailableTimes(day)); // Get available times based on the day
    setFormData((prevData) => ({
      ...prevData,
      date: date,
      time: "", // Reset time when date changes
    }));
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value; // Store the selected 24-hour format time in the state
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
        subject: "New Contact Form Submission from KTennis Club",
        from_name: "KTennis Club",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        date: formData.date ? formData.date.toISOString().split("T")[0] : "",
        time: formatTime(formData.time), // Send the formatted 12-hour time
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
        date: null,
        time: "",
      });
    } else {
      alert("Failed to send the message. Please try again later.");
    }
  };

  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
          }

          .contact-info {
            width: 40%;
          }

          .contact-info h2 {
            font-size: 1.875rem;
            line-height: 2.25rem;
            font-weight: 700;
          }

          .contact-info p, .contact-info ul {
            margin-bottom: 1rem;
            color: rgb(107, 114, 128);
          }

          .form-container {
            width: 60%;
          }

          .form-group-container {
            display: grid;
            gap: 1rem;
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          .form-label {
            margin-bottom: 0.5rem;
          }

          .form-input, .form-textarea {
            padding: 0.5rem;
            border: 1px solid #e5e7eb;
            width: 100%;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          .form-input:focus-visible, .form-textarea:focus-visible {
            outline: 2px solid #2563eb;
            outline-offset: 2px;
          }

          .form-textarea {
            min-height: 120px;
          }

          .form-submit {
            width: 100%;
            margin-top: 1.2rem;
            background-color: #3124ca;
            color: #fff;
            padding: 13px 5px;
            border-radius: 0.375rem;
            cursor: pointer;
          }

          .form-submit:hover {
            background-color: #4f46e5;
          }

          .map-container iframe {
            width: 100%;
            height: 400px;
            border: 0;
          }
        `}
      </style>

      <div className="container">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> Scenic Parks Tennis Courts, Dayton, New Jersey</p>
          <p><strong>Email:</strong> 121.aryanb@gmail.com </p>
          <p><strong>Phone:</strong> (732) - 513 - 0017</p>
          <p><strong>Hours:</strong></p>
          <ul>
            <li>Mon - Fri: 4:00 PM - 8:00 PM</li>
            <li>Saturday: 10:00 AM - 8:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>

          {/* Interactive Map */}
          <div className="map-container">
            <iframe
              title="Scenic Parks Tennis Courts Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.319555394664!2d-74.5165844!3d40.3773956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c7b227c0223f%3A0x529317ce4577f632!2s35%20Scenic%20Dr%2C%20Dayton%2C%20NJ%2008810%2C%20USA!5e0!3m2!1sen!2sus!4v1696787486319!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group-container">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Your email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="(732) - 429 - 0817"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="date" className="form-label">Select Date</label>
                <DatePicker
                  id="date"
                  className="form-input"
                  selected={formData.date}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  minDate={new Date()}
                  placeholderText="Click to select a date"
                  required
                />
              </div>

              {availableTimes.length > 0 && (
                <div className="form-group">
                  <label htmlFor="time" className="form-label">Available Times</label>
                  <select
                    id="time"
                    name="time"
                    className="form-input"
                    value={formData.time}
                    onChange={handleTimeChange}
                    required
                  >
                    <option value="">-- Select a Time --</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {formatTime(time)}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Additional information"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
