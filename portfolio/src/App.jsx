import "./app.scss"
import { Navbar } from "./components/navbar/Navbar";

import Heros from "./components/hero/Heros";
import Parallax from "./components/parallax/Parallax";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Heros/>
    </section>
    <section><Parallax type = "services"/></section>
    <section id="Services">Services</section>
    <section><Parallax type = "portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
