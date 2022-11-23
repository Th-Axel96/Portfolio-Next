import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { width } from "@mui/system";

// Add the smooth behavior to go to top
export const goToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function ScrollReturnToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <AnimatePresence>
      {scrollPosition > 300 && (
        <motion.button
          className="flex justify-end w-full bottom-0 fixed z-40 pb-2  pr-2"
          onClick={goToTop}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.5 } }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }}
        >
          <motion.div className="h-12 w-12 bg-blue-400 rounded-full flex justify-center items-center bottom-0 ">
            <ArrowUpwardIcon />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
