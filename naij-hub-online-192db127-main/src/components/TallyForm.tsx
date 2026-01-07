import { useState } from "react";

//
function TallyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://tally.so/r/pby5aP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "tly-FJOz0s1g2YItQyjdoBrPb5GDC9ZnBpNz",
          },
          body: JSON.stringify({
            answers: [
              { field: "name", value: formData.name },
              { field: "email", value: formData.email },
              { field: "message", value: formData.message },
            ],
          }),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default TallyForm;