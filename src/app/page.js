import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contacts />
      </section>
    </>
  );
}
