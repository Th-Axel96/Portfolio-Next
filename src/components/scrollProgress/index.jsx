import { motion, useScroll, useSpring } from "framer-motion";




export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="h-1.5 lg:h-2 w-full  bg-gradient-to-r from-cyan-500 to-blue-500 fixed z-30 origin-left "
        style={{ scaleX,
          
         }}

      />
    </>
  );
}
