import { HeaderGlobal } from "@src/components/headerGlobal";
import { AboutMe } from "@src/components/aboutMe";
import { SectionSkills } from "@src/components/sectionSkills";
import { SectionProject } from "@src/components/myProject";
import { SectionContact } from "@src/components/contact";
import { ParticlesAnimate } from "@src/components/particlesAnimate";




const HomePage = () => {
  return (
    <>
      <HeaderGlobal />
      <ParticlesAnimate />
      <AboutMe />
      <SectionSkills />
      <SectionProject />
      <SectionContact />

    </>
  );
};

export default HomePage;
