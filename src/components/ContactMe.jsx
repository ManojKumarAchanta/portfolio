import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Loader } from "lucide-react";

const ContactMe = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_hzso9dr",
        "template_nabrfr8",
        e.target,
        "K1QZF_ydxUt5aGavx"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => toast.error("Error sending message!"))
      .finally(() => setLoading(false));
  };

  return (
    <motion.div
      id="contact"
      className="w-full py-20 md:py-24 flex flex-col items-center justify-center text-white px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="p-10 rounded-2xl space-y-6 w-full max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text text-center">
          Contact Me
        </h1>

        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-200 text-sm font-medium mb-2"
          >
            Your Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full bg-gray-700 text-white text-lg px-10 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-200 text-sm font-medium mb-2"
          >
            Your Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full bg-gray-700 text-white text-lg px-10 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-200 text-sm font-medium mb-2"
          >
            Your Message
          </label>
          <div className="relative">
            <textarea
              name="message"
              id="message"
              placeholder="Write your message..."
              rows="4"
              required
              className="w-full bg-gray-700 text-white text-lg px-10 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <MessageSquare
              className="absolute left-2 top-4 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className={`w-full text-lg font-semibold py-3 rounded-xl shadow-md transition duration-200 flex items-center justify-center ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          whileHover={{ scale: loading ? 1 : 1.05 }}
          transition={{ duration: 0.2 }}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader className="animate-spin mr-2" size={20} />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactMe;
