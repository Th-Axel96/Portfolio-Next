import React from "react";
import LoaderImg from "./1476.gif";
import Image from "next/image";
import Bitmoji from "../../assets/img/bitmoji.png";
import { ParticlesAnimate } from "../particlesAnimate";

// import function for LOADER
import { FuséeInterval } from "../fuséeInterval";
import { Countdown } from "../countdownLoader";

// libray framerMotion
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen w-screen ">
      <Countdown />
      <FuséeInterval />
      <ParticlesAnimate />
    </div>
    /* <Image
        className="h-full w-full animate-spin transition delay-700"
        src={LoaderImg}
      />
      <h2>Page en cours de chargement</h2>

<div className="w-20 h-20 rounded-full bg-black border-t-4 border-blue-500">Loading</div> */
  );
}
