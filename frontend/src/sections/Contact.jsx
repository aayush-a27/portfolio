import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-yellow-500">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="mb-6 flex items-center gap-3">
            <FaUser className="text-yellow-500 text-xl" />
            <div className="w-full">
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-yellow-500 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="mb-6 flex items-center gap-3">
            <FaEnvelope className="text-yellow-500 text-xl" />
            <div className="w-full">
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-yellow-500 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="mb-6 flex items-start gap-3">
            <FaCommentDots className="text-yellow-500 text-xl mt-2" />
            <div className="w-full">
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-yellow-500 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-3 rounded-md font-bold hover:bg-yellow-600 transition"
          >
            Send
          </button>
          {status && (
            <p className="mt-4 text-center font-semibold">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
