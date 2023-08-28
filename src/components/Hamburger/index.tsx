"use client";
import { motion, useCycle } from "framer-motion";
import React from "react";
import { useDimensions } from "../../helpers/use-dimensions";
import AboutUs from "../AboutUs";

function Hamburger() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 93% 38.5px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(18px at 93% 38.5px)",
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const [downSm, setDownSm] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setDownSm(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.button
        style={{
          position: "absolute",
          display: "flex",
          top: 0,
          right: 0,
          bottom: 0,
          width: downSm || !isOpen ? "100%" : "50%",
          background: isOpen ? "#000" : "transparent",
          transition: "background 0.6s ease-in-out",
          zIndex: 2,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          overflow: "visible",
        }}
        variants={sidebar}
        onClick={() => toggleOpen()}
      >
        <motion.div
          style={{
            position: "absolute",
            top: "1.75em",
            right: "1.55em",
            // zIndex: 2,
          }}
        >
          <svg width="20" height="20" viewBox="0 1 21 19">
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke={"#2fe38d"}
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />

            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke={"#2fe38d"}
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />

            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke={"#2fe38d"}
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </motion.div>
        {isOpen && (
          <motion.ul
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "20%",
              margin: 0,
              padding: 10,
              width: "100%",
              gap: 20,
            }}
          >
            <motion.li
              style={{
                listStyle: "none",
                textAlign: "center",
                fontSize: 30,
                fontWeight: 600,
                color: "#fff",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a href="#About">About us</a>
            </motion.li>
            <motion.li
              style={{
                listStyle: "none",
                textAlign: "center",
                fontSize: 30,
                fontWeight: 600,
                color: "#fff",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a href="#Services">Services</a>
            </motion.li>
            <motion.li
              style={{
                listStyle: "none",
                textAlign: "center",
                fontSize: 30,
                fontWeight: 600,
                color: "#fff",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a href="#Contact">Contact us</a>
            </motion.li>
          </motion.ul>
        )}
      </motion.button>
    </motion.nav>
  );
}

export default Hamburger;
