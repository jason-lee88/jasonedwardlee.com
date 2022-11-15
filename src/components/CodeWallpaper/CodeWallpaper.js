import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./CodeWallpaper.css";

const CodeWallpaper = () => {
  const [offset, offsetApi] = useSpring(() => ({ x: 0, y: 0 }));

  const handleMouseMove = (event) => {
    offsetApi.start({
      x: (window.innerWidth / 2 - event.clientX) * 0.05,
      y: (window.innerHeight / 2 - event.clientY) * 0.05,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <animated.div
      className="parallax-wallpaper"
      style={{ ...offset, transform: "scale(1.2)" }}
    />
  );
};

export default CodeWallpaper;
