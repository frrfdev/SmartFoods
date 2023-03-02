import { motion } from "framer-motion";
import React from "react";

const FadeInTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
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
export default FadeInTransition;
