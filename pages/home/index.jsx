import { HeaderGlobal } from "@src/components/headerGlobal";
import { AboutMe } from "@src/components/aboutMe";
import { SectionSkills } from "@src/components/sectionSkills";
import { SectionProject } from "@src/components/myProject";
import { SectionContact } from "@src/components/contact";
// import { SectionFooter } from "@src/components/footer";
import { ParticlesAnimate } from "@src/components/particlesAnimate";
// import { AnimeFramer } from "@src/components/animeFrame";

import Loader from "@src/components/loader";
// scrollProgress
import CursorAnimated from "@src/components/cursorAnimated";

// use state
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <>
      <CursorAnimated />
      <HeaderGlobal />
      {/* <AnimeFramer/> */}
      <AboutMe />
      <SectionSkills />
      <SectionProject />
      <SectionContact />
      {/* <SectionFooter /> */}
      <ParticlesAnimate />
    </>
  );
};

export default HomePage;
