import React, { useState, useEffect } from "react";
import Image from "next/image";
import RocketImg from "../../assets/img/fusee.png";

// library framer motion
import { motion } from "framer-motion";

// export const FuséeInterval = () => {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     const test = window.setTimeout(() => {
//       setShow(true);
//     }, 500);
//     return () => {
//       // return rien ou return apres timeout
//     };
//   }, []);

export const FuséeInterval = () => {
  return (
    <div className="flex w-full h-full items-end justify-center">
      {/* // fusée 1 */}
      <div className="-rotate-6">
        <motion.div
          animate={{
            y: -1000,
            x: -500,
          }}
          transition={{
            delay: 1,
            duration: 5,
          }}
        >
          <Image height="100px" width="100px" src={RocketImg} />
        </motion.div>
      </div>
      {/* // fusée 2 */}
      <div className="px-12 rotate-3">
        <motion.div
          animate={{
            y: -1000,
            x: 200,
          }}
          transition={{
            delay: 1.2,
            duration: 3,
          }}
        >
          <Image height="100px" width="100px" src={RocketImg} />
        </motion.div>
      </div>
      {/* // fusée 3 */}
      <div className=" -rotate-6">
        <motion.div
          animate={{
            y: -1000,
            x: -500,
          }}
          transition={{
            delay: 1.5,
            duration: 4,
          }}
        >
          <Image height="100px" width="100px" src={RocketImg} />
        </motion.div>
      </div>
      {/* fusée 4 */}
      <div className=" pl-12 -rotate-6">
        <motion.div
          animate={{
            y: -2000,
            x: -500,
          }}
          transition={{
            delay: 1.5,
            duration: 5,
          }}
        >
          <Image height="100px" width="100px" src={RocketImg} />
        </motion.div>
      </div>
    </div>
  );
};
