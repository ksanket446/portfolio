import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex-grow w-full">
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
