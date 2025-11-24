"use client";
import { motion } from "framer-motion";

const FloatingShapes: React.FC = () => {
  const shapes = [
    { size: 80, x: 50, y: 200, color: "bg-gray-500/50" },
    { size: 60, x: 300, y: 100, color: "bg-white/30" },
    { size: 100, x: 600, y: 300, color: "bg-gray-400/40" },
    { size: 50, x: 800, y: 50, color: "bg-gray-300/50" },
  ];

  return (
    <>
      {shapes.map((shape, idx) => (
        <motion.div
          key={idx}
          className={`absolute rounded-full ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.y,
            left: shape.x,
            zIndex: 0, 
          }}
          animate={{
            y: [0, 15, 0],   
            x: [0, 10, 0],   
            opacity: [0.5, 0.8, 0.5], 
          }}
          transition={{
            duration: 6 + idx * 1.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default FloatingShapes;
