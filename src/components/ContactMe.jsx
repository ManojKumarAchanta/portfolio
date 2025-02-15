import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
      .catch(() => toast.error("Error sending message!"));
  };

  return (
    <motion.div
      id="contact"
      className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-8 md:px-32"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6 w-full max-w-lg"
      >
        <h1 className="text-4xl text-center md:text-5xl font-bold text-blue-400 mb-4">
          Contact Me
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-md w-full bg-gray-700 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-md w-full bg-gray-700 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="p-4 rounded-md w-full bg-gray-700 text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};
export default ContactMe;
