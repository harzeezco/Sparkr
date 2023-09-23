// Cursor.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

  // Update cursor position based on mouse movements
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });

    // Check if the cursor is within the page viewport

    // Calculate mask position with a slight delay and distance
    setTimeout(() => {
      setMaskPosition({
        x: e.clientX - 1, // Adjust the values for horizontal offset
        y: e.clientY - 1, // Adjust the values for vertical offset
      });
    }, 10000); // Adjust the delay time for the chase effect
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-mask"
        style={{
          left: maskPosition.x + "px",
          top: maskPosition.y + "px",
        }}
        initial={{ opacity: 0, scale: 0.5, y: "-50%" }}
        animate={{
          opacity: 1,
          scale: 1,
          x: maskPosition.x,
          y: "-50%", // Stay at the top edge of the cursor
        }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.3,
        }}
      />
      t
      <motion.div
        className="cursor"
        style={{
          left: cursorPosition.x + "px",
          top: cursorPosition.y + "px",
          willChange: "transform",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
          duration: 0.5,
        }}
      />
    </>
  );
};

export default Cursor;
