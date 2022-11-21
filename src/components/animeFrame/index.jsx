import { motion } from "framer-motion";

export const AnimeFramer = () => {
  return (
    <>
      <motion.div
      animate={{
        x:20 
      }}
      transition={{
        duration:2
      }}
      >
<p>Test</p>

      </motion.div>
    </>
  );
};
