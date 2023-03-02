import React from "react";
import type { AnimationControls } from "framer-motion";
import { motion, useAnimationControls } from "framer-motion";
("use client");

const Dot = ({
  index,
  controls,
}: {
  controls: AnimationControls;
  index: number;
}) => {
  return (
    <motion.div
      animate={controls}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-2 w-2 rounded-full bg-gray-500"
    ></motion.div>
  );
};

export const ThreeDotMenu = () => {
  const controls = useAnimationControls();

  return (
    <div
      className="flex h-full cursor-pointer gap-1"
      onMouseEnter={() => {
        controls.start({
          y: [0, -10, 0],
        });
      }}
    >
      {[0, 1, 2].map((n) => (
        <Dot key={n} index={n} controls={controls}></Dot>
      ))}
    </div>
  );
};
