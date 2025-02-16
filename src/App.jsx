import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Footer from "./components/Footer.jsx";
import Certifications from "./components/Certifications.jsx";
import { motion } from "framer-motion"; // Import motion for App container animation
import "@fontsource/inter"; 
import TimeLine from "./components/TimeLine.jsx";
const App = () => {
  return (
    <motion.div
      className="scroll-smooth " // Enable smooth scrolling
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Toaster position="top-right" reverseOrder={false} />{" "}
      {/* Toaster position */}
      <Navbar />
      <main>
        
          <Hero />
        <section id="timeline" className="bg-gray-800">
          {" "}
          {/* Alternate section background */}
          <TimeLine />
        </section>
        <section id="projects" className="bg-gray-800">
          {" "}
          {/* Alternate section background */}
          <Projects />
        </section>
        <section id="skills" className="bg-gray-900">
          {" "}
          {/* Alternate section background */}
          <Skills />
        </section>
        <section id="certifications" className="bg-gray-800">
          {" "}
          {/* Alternate section background */}
          <Certifications />
        </section>
        <section id="contact" className="bg-gray-900">
          {" "}
          {/* Alternate section background */}
          <ContactMe />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default App;
