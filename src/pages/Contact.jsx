import "./Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://69ddd245410caa3d47ba0709.mockapi.io/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (!res.ok) {
        throw new Error("MockAPI Error");
      }

      await emailjs.send(
        "service_63lph8n",
        "template_1td2343",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        "90o_USL_rsbhZK6nK"
      );

      alert("Message sent & saved successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log("FULL ERROR:", error);
      alert("Error: " + (error.message || "Something went wrong"));
    }
  };

  return (
    <div className="contact">
      <h1 className="contact-title">CONTACT</h1>

      <div className="contact-container">


        <div className="contact-info">
          <h3>Call Us:</h3>
          <p>9360959559 (India +91)</p>

          <h3>Email Us:</h3>
          <p>jayamuruganvenkatachalam27@gmail.com</p>

          <h3>Address:</h3>
          <p>India, Tamilnadu, Erode</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3911.4494998404357!2d77.82495707505069!3d11.374862988812634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDIyJzI5LjUiTiA3N8KwNDknMzkuMSJF!5e0!3m2!1sen!2sin!4v1764743768520!5m2!1sen!2sin"
            title="map"
          ></iframe>
        </div>


        <div className="contact-form">
          <form onSubmit={handleSubmit}>

            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>PhoneNumber:</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Mail:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Mail"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Message:</label>
            <textarea
              name="message"
              placeholder="Enter your Message or Feedback"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;