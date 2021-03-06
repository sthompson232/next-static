import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


function FadeInOnScroll({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInOnScroll
