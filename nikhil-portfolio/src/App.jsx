import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Team from "./components/Team";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import HowWeWork from "./components/HowWeWork";
import WhyChooseUs from "./components/WhyChooseUs";
import Resume from "./components/Resume";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Team />
        <Skills />
        <Experience />
        <Education />
        <HowWeWork />
        <WhyChooseUs />
        <Resume />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
