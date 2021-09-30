import * as React from "react";
import { motion } from "framer-motion";
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem = ({ page, toggle }) => {
  return (
    <motion.li
      className="mobile-nav-item"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div onClick={toggle}>
        <Link href={page.url} passHref onClick={toggle}>
            <h3 className="cursor-pointer">{page.name}</h3>
        </Link>
      </div>
    </motion.li>
  );
};