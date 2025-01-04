import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-6 h-6 bg-yellow-400 border-2 border-black rounded-full"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default CustomCursor;
