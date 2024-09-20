import { useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const UseInView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    // amount: "all",
    margin: "-200px",
  });

  useEffect(() => {
    console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative mx-auto grid h-32 w-96 place-content-center"
    >
      <h1 className="relative z-0 text-3xl font-black uppercase">
        Show me on scroll
      </h1>
      <motion.div
        animate={{
          y: isInView ? "-100%" : "0%",
        }}
        className="absolute bottom-0 left-0 top-0 z-10 w-1/3 bg-indigo-500"
      />
      <motion.div
        animate={{
          y: isInView ? "100%" : "0%",
        }}
        className="absolute bottom-0 left-1/3 top-0 z-10 w-1/3 bg-indigo-500"
      />
      <motion.div
        animate={{
          y: isInView ? "-100%" : "0%",
        }}
        className="absolute bottom-0 left-2/3 top-0 z-10 w-1/3 bg-indigo-500"
      />
    </div>
  );
};
