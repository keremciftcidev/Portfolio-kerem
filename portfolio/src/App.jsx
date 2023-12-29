import "./app.scss"
import { Navbar } from "./components/navbar/Navbar";

import Heros from "./components/hero/Heros";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";



const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Heros/>
    </section>
    <section><Parallax type = "services"/></section>
    <section id="Services">Services</section>
    <section><Parallax type = "portfolio"/></section>
    <Portfolio/>
    
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
