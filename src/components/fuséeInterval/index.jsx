import React, { useState, useEffect } from "react";
import Image from "next/image";
import RocketImg from "../../assets/img/fusee.png";
import Avion1 from "../../assets/img/avion1.png";
import Helicopter from "../../assets/img/helicoptere.png";
import FlyHunter from "../../assets/img/avion-de-chasse.png";

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

import { MotionSky } from "../motionSky";
import { Countdown } from "../countdownLoader";
import { duration } from "@mui/material";

export const FuséeInterval = () => {
  return (
    <>
      {/* motion SKY animate IMG */}
      <div className="flex justify-center w-full ">
        <MotionSky />
      </div>
      <div className="flex w-full h-80 justify-center items-center ">
        {/* styles for decompteur need styles */}

        <motion.div
          className="z-20"
          
          animate={{
            rotate: [
              1, -1, -2, -1, 1, 2, 3, 2, 1, -1, -2, -3, 1, -1, -2, -1, 1, 2, 3,
              2, 1, -1, -2, -3, 1, -1,
            ],
            x: [5, -5, -5, 5, -5, 5, -5],
            y: [5, -5, -5, 5, -5, 5, -5],
            scale:1.8
          }}
          transition={{
            times: [0, 1, 1],
            duration: 5,
          }}
        >
          <div className="text-2xl font-open font-bold flex  flex-col items-center shadow-xl shadow-blue-400  bg-white/20 p-4 rounded-2xl border-t-4 border-blue-400">
            {/* exemples MOTION  */}
            {/* <motion.div
              style={{
                width: 120,
                height: 120,
                borderRadius: 25,
                backgroundColor: "#fd3",
                position: "absolute",
                left: 40,
                top: 40,
              }}
              animate={{
                x: [0, 200, 200, 0, 0],
                y: [0, 0, 200, 200, 0],
                rotate: -360,
                backgroundColor: ["#fd3", "#60f", "#fd3"],
              }}
              transition={{ duration: 4, ease: "linear" }}
            /> */}
 
              <p className="pb-4">Chargement...</p>
           
            <div className="">
              <Countdown />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex w-full h-40 items-end justify-center ">
        {/* // fusée 1 */}
        <div className="-rotate-1">
          <motion.div
            animate={{
              y: -1500,
              x: -40,
              rotate: [0, -6, 6, -6, 6, -6, 6],
            }}
            transition={{
              delay: 1,
              duration: 7,
            }}
          >
            <Image height="60px" width="60px" src={RocketImg} />
          </motion.div>
        </div>
        {/* // fusée 2 */}
        <div className="md:px-12 px-6 rotate-1">
          <motion.div
            animate={{
              y: -1000,
              x: [0, 50, -50, 0],
              rotate: [-1, 15, -15, 2],
            }}
            transition={{
              delay: 1.2,
              duration: 5,
            }}
          >
            <Image height="60px" width="60px" src={RocketImg} />
          </motion.div>
        </div>
        {/* // fusée 3 */}
        <div className=" -rotate-1">
          <motion.div
            animate={{
              y: -700,
              x: [0, 20, -20, 0, 0, 0, 0],
              rotate: [
                0, 3, -3, 3, -3, 0, 3, -3, 3, -3, 0, 3, -3, 3, -3, 0, 3, -3, 3,
                -3, 0, 3, -3, 3, -3, 0, 3, -3, 3, -3, 0, 3, -3, 3, -3, 0, 3, -3,
                3, -3, 0, 3, -3, 3, -3,
              ],
            }}
            transition={{
              delay: 1.5,
              duration: 5,
            }}
          >
            <Image height="60px" width="60px" src={RocketImg} />
          </motion.div>
        </div>
        {/* fusée 4 */}
        <div className=" md:pl-12 pl-6 -rotate-1">
          <motion.div
            animate={{
              y: -1200,
              x: [0, -10, 15, -10, 10, -15, 10, -10, 15, -10],
              rotate: [
                0, 1, -1, 1, -1, 0, 1, -1, 1, -1, 0, 1, -1, 1, -1, 0, 1, -1, 1,
                -1, 0, 1, -1, 1, -1, 0, 1, -1, 1, -1, 0, 1, -1, 1, -1,
              ],
            }}
            transition={{
              delay: 1.5,
              duration: 5,
            }}
          >
            <Image height="60px" width="60px" src={RocketImg} />
          </motion.div>
        </div>
      </div>
    </>
  );
};
