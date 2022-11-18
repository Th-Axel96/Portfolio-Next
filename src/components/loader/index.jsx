import React from "react";
import LoaderImg from "./1476.gif";
import Image from "next/image";
import Bitmoji from "../../assets/img/bitmoji.png";

// test

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <motion.div
        className="w-40 h-40 bg-blue-500 duration-1000 -translate-y-60 "
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <p className="pt-40 font-open font-bold text-xl ">
        Site en cours de chargement...
      </p>
    </div>
    /* <Image
        className="h-full w-full animate-spin transition delay-700"
        src={LoaderImg}
      />
      <h2>Page en cours de chargement</h2>

<div className="w-20 h-20 rounded-full bg-black border-t-4 border-blue-500">Loading</div> */
  );
}
