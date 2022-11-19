import React from "react";

import { ParticlesAnimate } from "../particlesAnimate";

// import function for LOADER
import { FuséeInterval } from "../fuséeInterval";

import { MotionSky } from "../motionSky";
// libray framerMotion

export default function Loader() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      {/* <MotionSky /> */}
      {/* <Countdown /> */}
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
