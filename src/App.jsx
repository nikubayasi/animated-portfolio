import "./app.scss";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero"
import Test from "./Test";
import Parallax from "../components/parallax/Parallax";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Cursor from "../components/cursor/Cursor";
import Strongs from '../components/strongs/Strongs'
const App = () => {
  return <div>
    <Cursor />
    <section id="Home">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services /></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
   <Portfolio />
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section><Strongs /></section>
    <section id="Contact">
      <Contact />
    </section>
    
    {/* <Test/ > */}
    
  </div>;
};

export default App;
