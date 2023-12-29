import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Astroturf Reservation Web Site",
    img: "./halisaha.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque culpa, nulla consequatur iste quod, iure tenetur expedita, architecto laborum libero. Praesentium voluptatem modi dolore porro obcaecati ea veritatis quidem?",
  },
  {
    id: 2,
    title: "Netflix Clone With React",
    img: "./netflix.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque culpa, nulla consequatur iste quod, iure tenetur expedita, architecto laborum libero. Praesentium voluptatem modi dolore porro obcaecati ea veritatis quidem?",
  },
  {
    id: 3,
    title: "My Portfolio",
    img: "./portfolio.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque culpa, nulla consequatur iste quod, iure tenetur expedita, architecto laborum libero. Praesentium voluptatem modi dolore porro obcaecati ea veritatis quidem?",
  },
  {
    id: 4,
    title: "React commerce",
    img: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque culpa, nulla consequatur iste quod, iure tenetur expedita, architecto laborum libero. Praesentium voluptatem modi dolore porro obcaecati ea veritatis quidem?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset  :["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{y}} >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
