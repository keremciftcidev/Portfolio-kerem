import "./app.scss"
import { Navbar } from "./components/navbar/Navbar";

import Heros from "./components/hero/Heros";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Heros/>
    </section>
    <section>Parallax</section>
    <section id="Services">Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
