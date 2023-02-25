import { motion } from "framer-motion";
import React from "react";

const SlideRightLayout = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
    className="h-full"
  >
    {children}
  </motion.div>
);
export default SlideRightLayout;
