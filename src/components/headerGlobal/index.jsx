import { useState } from "react";

// import for create HEADER
import { AsideHeader } from "../asideHeaderDesktop";
import { ContentHeader } from "../contentHeaderDesktop";

import { ContentHeaderMobile } from "../contentHeaderMobile";

import { ScrollProgress } from "../scrollProgress";

import { ScrollReturnToTop } from "../returnToTop";

// header for desktop
export const HeaderGlobal = () => {
  // function show with useState
  const [show, setShow] = useState(false);
  const Toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="hidden xl:block">
        <ScrollProgress />
      </div>
      <header className="hidden xl:block">
        <AsideHeader />
        <ContentHeader />
      </header>
      <div className="xl:hidden">
        <ContentHeaderMobile />
        <ScrollReturnToTop />
      </div>
    </>
  );
};
