import { useState } from "react";

// import for create HEADER
import { AsideHeader } from "../asideHeaderDesktop";
import { ContentHeader } from "../contentHeaderDesktop";

import { ContentHeaderMobile } from "../contentHeaderMobile";

// header for desktop
export const HeaderGlobal = () => {
  // function show with useState
  const [show, setShow] = useState(false);
  const Toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <header className="hidden lg:block">
        <AsideHeader />
        <ContentHeader />
      </header>
      <div  className="lg:hidden">
        
        <ContentHeaderMobile />
      
      </div>
    </>
  );
};
