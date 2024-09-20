import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const UseScrollAdvanced = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
    // offset: ["top of the box ; end of the bottom of the view port", "bottom of the box ; start of the top of the view port"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

  return (
    <motion.div
      ref={targetRef}
      style={{ rotate }}
      className="mx-auto size-64 bg-indigo-500"
    />
  );
};
