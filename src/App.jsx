import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Other } from "./components/Other/Other";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <Hero />
      <Projects />
      <Experience />
      <Other />

      <Contact />
    </div>
  );
}

export default App;
