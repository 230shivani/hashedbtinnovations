import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: formData });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Book Your Seat</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
      <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
