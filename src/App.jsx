import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Footer from "./components/Footer.jsx";
import Certifications from "./components/Certifications.jsx";

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <section className="min-h-screen bg-gray-100">
        <Hero />
      </section>
      <section className="min-h-screen bg-gray-100">
        <Projects />
      </section>
      <section className="min-h-screen bg-gray-100">
        <Skills />
      </section>
      <section className="min-h-screen bg-gray-100">
        <Certifications />
      </section>
      <section className="min-h-screen bg-gray-100">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
};

export default App;
