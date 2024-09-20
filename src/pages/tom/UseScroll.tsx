import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";

export const UseScroll = () => {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FFFFFF", "#6366F1"]
  );

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        background,
        x: "-50%",
        y: "50%",
      }}
      className="fixed left-1/2 top-1/2 h-4 w-screen bg-indigo-500"
    />
  );
};
