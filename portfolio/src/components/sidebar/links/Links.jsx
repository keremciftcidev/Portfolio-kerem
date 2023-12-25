import { motion } from "framer-motion";


const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links">
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item}
          
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
