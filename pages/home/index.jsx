import { HeaderGlobal } from "@src/components/headerGlobal";
import { AboutMe } from "@src/components/aboutMe";
import { SectionSkills } from "@src/components/sectionSkills";
import { SectionProject } from "@src/components/myProject";
import { SectionContact } from "@src/components/contact";

const HomePage = () => {
  return (
    <>
      <HeaderGlobal />
      <AboutMe />
      <SectionSkills />
      <SectionProject />
      <SectionContact />
      
    </>
  );
};

export default HomePage;
