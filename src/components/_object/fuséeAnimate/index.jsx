import React, { useState, useEffect } from "react";
import Image from "next/image";
import RocketImg from "../../../assets/img/fusee.png";

// library framer motion
import { motion } from "framer-motion";

export const FuséeAnimate1 = () => {
  return (
    <div className="flex justify-center">
      {/* // fusée 1 */}
      <div className="-rotate-1  ">
        <motion.div
          animate={{
            y: -1000,
          
          }}
          transition={{
            delay: 1,
            duration: 5,
          }}
        >
          <Image height="75px" width="75px" src={RocketImg} />
        </motion.div>
      </div>
      {/* // fusée 2 */}
      <div className="md:px-12  rotate-1">
        <motion.div
          animate={{
            y: -4700,
            
          }}
          transition={{
            delay: 1.2,
            duration: 10,
            repeat: Infinity,
          }}
        >
          <Image height="75px" width="75px" src={RocketImg} />
        </motion.div>
      </div>
 
    
    </div>
  );
};
