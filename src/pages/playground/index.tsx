import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const Column = () => {
  const controls = useAnimationControls();

  const onHover = () => {
    controls.start({
      width: ["100%", "0%", "100%"],
      background: ["red", "red", "white"],
      color: ["hsl(255, 255, 240)", "hsl(255, 255, 240)", "hsl(0, 72.2, 50.6)"],
    });
  };

  return (
    <div className="flex h-full w-full justify-center" onMouseEnter={onHover}>
      <motion.div
        initial={{}}
        animate={controls}
        transition={{
          width: {
            duration: 0.7,
          },
          background: {
            duration: 0.7,
          },
          color: {
            duration: 0.7,
          },
        }}
        className="flex h-full w-full justify-center bg-red-600 text-white"
      >
        <div className="flex h-full w-full items-center justify-center self-center overflow-hidden">
          <span className="text-4xl font-bold">A</span>
        </div>
      </motion.div>
    </div>
  );
};

export const Playground = () => {
  return (
    <div className="grid h-full w-full grid-cols-4 items-center justify-center  bg-white">
      <Column></Column>
      <Column></Column>
      <Column></Column>
      <Column></Column>
    </div>
  );
};

export default Playground;
