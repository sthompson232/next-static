import React, { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from '../../utils'
import { MenuItem } from "./MenuItem"
import { pages } from './pages'

const sidebar = {
    open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <div className="navigation-button flex items-center justify-center" onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
            variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
            }}
        />
        <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
        />
        <Path
            variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
            }}
        />
    </svg>
  </div>
);

export const MobileNavbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        >
        <motion.div className="navigation-background" variants={sidebar} />
            <motion.ul 
                className="mobile-nav-container"
                variants={{
                    open: {
                        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                    },
                    closed: {
                        transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                }}
            >
                {pages.map(page => (
                <MenuItem page={page} key={page.id} toggle={() => toggleOpen()} />
                ))}
            </motion.ul>
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};

const itemIds = [0, 1, 2, 3, 4];

export default MobileNavbar;