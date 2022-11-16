import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CodeWallpaper.css";

const CodeWallpaper = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoords({
      x: (window.innerWidth / 2 - event.clientX) * 0.02,
      y: (window.innerHeight / 2 - event.clientY) * 0.04,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      className="parallax-wallpaper"
      animate={coords}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    />
  );
};

export default CodeWallpaper;
