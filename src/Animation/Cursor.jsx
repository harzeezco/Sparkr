import { useEffect, useState, useRef, useCallback, useContext } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useMotionValue,
  useSpring,
  transform,
  animate,
} from "framer-motion";
import useTheme from "../Hooks/useTheme";
import { StickyCursorContext } from "../Contexts/StickyCursorContext";

export default function Cursor() {
  const { stickyElement, isHovered, setIsHovered } =
    useContext(StickyCursorContext);
  const { theme } = useTheme();

  const cursor = useRef(null);
  const cursorSize = isHovered ? 60 : 10;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  //Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const rotate = (distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = useCallback(
    (e) => {
      if (stickyElement.current) {
        // Check if stickyElement is defined
        const { clientX, clientY } = e;
        const { left, top, height, width } =
          stickyElement.current.getBoundingClientRect();

        //center position of the stickyElement
        const center = { x: left + width / 2, y: top + height / 2 };

        if (isHovered) {
          //distance between the mouse pointer and the center of the custom cursor and
          const distance = { x: clientX - center.x, y: clientY - center.y };

          //rotate
          rotate(distance);

          //stretch based on the distance
          const absDistance = Math.max(
            Math.abs(distance.x),
            Math.abs(distance.y),
          );
          const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
          const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
          scale.x.set(newScaleX);
          scale.y.set(newScaleY);

          //move mouse to center of stickyElement + slightly move it towards the mouse pointer
          mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
          mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
        } else {
          //move custom cursor to center of stickyElement
          mouse.x.set(clientX - cursorSize / 2);
          mouse.y.set(clientY - cursorSize / 2);
        }
      }
    },
    [cursorSize, isHovered, stickyElement, mouse.x, mouse.y, scale.x, scale.y],
  );

  const manageMouseOver = useCallback(() => {
    setIsHovered(true);
  }, [setIsHovered]);

  const manageMouseLeave = useCallback(() => {
    setIsHovered(false);
    animate(
      cursor.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1 },
      { type: "spring" },
    );
  }, [setIsHovered]);

  useEffect(() => {
    const element = stickyElement.current;

    if (!element) return;

    if (element) {
      element.addEventListener("mouseenter", manageMouseOver);
      element.addEventListener("mouseleave", manageMouseLeave);
      window.addEventListener("mousemove", manageMouseMove);
      return () => {
        element.removeEventListener("mouseenter", manageMouseOver);
        element.removeEventListener("mouseleave", manageMouseLeave);
        window.removeEventListener("mousemove", manageMouseMove);
      };
    }
  }, [stickyElement, manageMouseOver, manageMouseLeave, manageMouseMove]);

  const template = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  const isLight = theme === "light" ? "bg-dark" : "bg-light-primary";
  const zIndexValue = isHovered ? -1 : 1000;

  return (
    <div>
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
          zIndex: zIndexValue,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={`${isLight} cursor`}
        ref={cursor}
      ></motion.div>
    </div>
  );
}

Cursor.propTypes = {
  stickyElement: PropTypes.oneOfType([
    PropTypes.func, // Refs can be function-based
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }), // Or object-based with a 'current' property
  ]),
};
