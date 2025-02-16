import { Toaster } from "react-hot-toast"; // Use Toaster instead of ToastBar
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Footer from "./components/Footer.jsx";
import Certifications from "./components/Certifications.jsx";
import { motion } from "framer-motion";
import "@fontsource/inter";
import "@fontsource/poppins"; // For default Poppins font

import TimeLine from "./components/TimeLine.jsx";

const App = () => {
  return (
    <motion.div
      className="scroll-smooth font-inter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Toaster position="top-right" reverseOrder={false} />{" "}
      {/* Toast configuration */}
      <Navbar />
      <main>
        <Hero />
        <section id="timeline" className="bg-gray-800">
          <TimeLine />
        </section>
        <section id="projects" className="bg-gray-800">
          <Projects />
        </section>
        <section id="skills" className="bg-gray-900">
          <Skills />
        </section>
        <section id="certifications" className="bg-gray-800">
          <Certifications />
        </section>
        <section id="contact" className="bg-gray-900">
          <ContactMe />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default App;
