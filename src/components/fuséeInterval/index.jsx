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

import { Countdown } from "../countdownLoader";

export const FuséeInterval = () => {
  return (
    <>
      <div className="flex w-full h-96 justify-center items-center">
        {/* styles for decompteur need styles */}
        <div className="text-5xl font-open font-bold text-white bg-black p-8 rounded-2xl border-t-4 border-blue-400 hover:scale-150 hover:duration-1000 transition hover:ease-in-out">
          <Countdown />
        </div>
      </div>
      <div className="flex w-full md:h-72 h-60 items-end justify-center">
        {/* // fusée 1 */}
        <div className="-rotate-6">
          <motion.div
            animate={{
              y: -1000,
              x: -400,
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
        <div className="md:px-12  rotate-3">
          <motion.div
            animate={{
              y: -1000,
              x: 200,
            }}
            transition={{
              delay: 1.2,
              duration: 5,
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
              x: -300,
            }}
            transition={{
              delay: 1.5,
              duration: 5,
            }}
          >
            <Image height="100px" width="100px" src={RocketImg} />
          </motion.div>
        </div>
        {/* fusée 4 */}
        <div className=" md:pl-12 -rotate-6">
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
    </>
  );
};
