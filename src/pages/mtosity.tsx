import { useMotionValueEvent, useScroll } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const DURATION = 0.6;
const STAGGER = 0.05;
const DELAY_DEFAULT = 0.6;

enum Stage {
  INITIAL,
  EXPAND,
}

export const MTosity = () => {
  const targetRef = useRef(null);
  const letterRef = useRef<HTMLParagraphElement>(null);
  const [letterHeight, setLetterHeight] = useState(0);
  const [letterWidth, setLetterWidth] = useState(0);

  const [stage, setStage] = useState<Stage>();
  useLayoutEffect(() => {
    if (!letterRef.current) return;
    setLetterHeight(letterRef.current.offsetHeight);
    setLetterWidth(letterRef.current.offsetWidth);
  }, [letterRef]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.05) {
      setStage(Stage.EXPAND);
    } else {
      setStage(Stage.INITIAL);
    }
  });

  const config = useMemo(() => {
    return [
      {
        letter: "M",
        children: {
          letter: "inh",
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: stage === Stage.EXPAND ? 1 : 0,
          },
        },
        initial: {
          y: letterWidth * 4,
          x: letterWidth * 4,
          opacity: 0,
        },
        animate: {
          y: stage === Stage.EXPAND ? -(letterHeight * 2) : 0,
          x: stage === Stage.EXPAND ? letterWidth * 0.1 : letterWidth * 2.5,
          opacity: 1,
        },
        transition: {
          duration: stage === Stage.EXPAND ? DURATION / 2 : DURATION,
          delay: stage === undefined ? STAGGER * 0 + DELAY_DEFAULT : 0,
        },
      },
      {
        letter: "T",
        children: {
          letter: "âm",
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: stage === Stage.EXPAND ? 1 : 0,
          },
        },
        initial: {
          x: 210,
          opacity: 0,
        },
        animate: {
          y: stage === Stage.EXPAND ? -(letterHeight * 1.2) : 0,
          x: stage === Stage.EXPAND ? -(letterWidth * 1.8) : letterWidth * 1.1,
          opacity: 1,
        },
        transition: {
          duration: stage === Stage.EXPAND ? DURATION / 2 : DURATION,
          delay: stage === undefined ? STAGGER * 1 + DELAY_DEFAULT : 0,
        },
      },
      {
        letter: "O",
        initial: {
          y: 100,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          x: stage === Stage.EXPAND ? -(letterWidth * 2) : 0,
        },
        transition: {
          duration: stage === Stage.EXPAND ? DURATION / 2 : DURATION,
          delay: stage === undefined ? STAGGER * 2 + DELAY_DEFAULT : 0,
        },
      },
      {
        letter: "S",
        initial: {
          y: 100,
          opacity: 0,
        },
        animate: {
          y: 0,
          x: stage === Stage.EXPAND ? -(letterWidth * 2) : 0,
          opacity: 1,
        },
        transition: {
          duration: stage === Stage.EXPAND ? DURATION / 2 : DURATION,
          delay: stage === undefined ? STAGGER * 3 + DELAY_DEFAULT : 0,
        },
        children: {
          letter: "-",
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: stage === Stage.EXPAND ? 1 : 0,
          },
        },
      },
      {
        letter: "I",
        initial: {
          y: 100,
          opacity: 0,
        },
        animate: {
          y: 0,
          x: stage === Stage.EXPAND ? -(letterWidth * 2) : -(letterWidth * 0.3),
          opacity: 1,
        },
        transition: {
          duration: stage === Stage.EXPAND ? DURATION / 2 : DURATION,
          delay: stage === undefined ? STAGGER * 4 + DELAY_DEFAULT : 0,
        },
      },
      {
        letter: "T",
        initial: {
          y: 100,
          opacity: 0,
        },
        animate: {
          y: 0,
          x: stage === Stage.EXPAND ? -(letterWidth * 2) : -(letterWidth * 0.3),
          opacity: 1,
        },
        transition: {
          duration: stage === Stage.EXPAND ? DURATION / 2 : DURATION,
          delay: stage === undefined ? STAGGER * 5 + DELAY_DEFAULT : 0,
        },
      },
      {
        letter: "Y",
        leftChildren: {
          letter: "NGU",
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: stage === Stage.EXPAND ? 1 : 0,
          },
        },
        children: {
          letter: "ỄN",
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: stage === Stage.EXPAND ? 1 : 0,
          },
        },
        initial: {
          y: 100,
          opacity: 0,
        },
        animate: {
          y: stage === Stage.EXPAND ? -letterHeight * 1.2 : 0,
          x:
            stage === Stage.EXPAND
              ? -(letterWidth * 3.9)
              : -(letterWidth * 2.1),
          opacity: 1,
        },
        transition: {
          duration: stage === Stage.EXPAND ? DURATION / 2 : DURATION,
          delay: stage === undefined ? STAGGER * 6 + DELAY_DEFAULT : 0,
        },
      },
    ];
  }, [stage, letterWidth, letterHeight]);

  return (
    <section
      ref={targetRef}
      className="block gap-2 bg-zinc-950 text-white
    text-4xl font-bold sm:text-7xl md:text-8xl lg:text-9xl
    "
      style={{
        height: "400vh",
        fontFamily: "'Merienda', cursive",
      }}
    >
      <div className="sticky top-1/3 tracking-widest text-center">
        <motion.p initial="initial" className="relative">
          {config.map((item, idx) => (
            <motion.span
              key={`mtosity-${item.letter}-${idx}`}
              ref={item.letter === "M" ? letterRef : null}
              initial="initial"
              animate="animate"
              variants={{
                initial: item.initial,
                animate: item.animate,
              }}
              transition={item.transition}
              className="inline-block"
            >
              {item.leftChildren ? (
                <motion.span
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: item.leftChildren.initial,
                    animate: item.leftChildren.animate,
                  }}
                  transition={item.transition}
                >
                  {item.leftChildren.letter}
                </motion.span>
              ) : null}
              <span className="text-lime-300">{item.letter}</span>
              {item.children ? (
                <motion.span
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: item.children.initial,
                    animate: item.children.animate,
                  }}
                  transition={item.transition}
                >
                  {item.children.letter}
                </motion.span>
              ) : null}
            </motion.span>
          ))}
        </motion.p>
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
          className="fixed inset-0 opacity-20"
        />
      </div>
    </section>
  );
};
