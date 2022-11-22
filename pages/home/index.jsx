import { HeaderGlobal } from "@src/components/headerGlobal";
import { AboutMe } from "@src/components/aboutMe";
import { SectionSkills } from "@src/components/sectionSkills";
import { SectionProject } from "@src/components/myProject";
import { SectionContact } from "@src/components/contact";
import { ParticlesAnimate } from "@src/components/particlesAnimate";
import { AnimeFramer } from "@src/components/animeFrame";

import Loader from "@src/components/loader";
// scrollProgress

// use state
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    },3000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <>
      <HeaderGlobal />
      <AboutMe />
      <SectionSkills />
      <SectionProject />
      <SectionContact />
      <ParticlesAnimate />
      
    </>
  );
};

export default HomePage;
