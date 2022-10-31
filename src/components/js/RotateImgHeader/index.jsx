import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// img header
import Image from "next/image";
import DevImgHeader from "../../../assets/img/Developer-img.svg"

/* test rotate its ok */
export const RotateAnimation = () => {
  const [toggle, setToggle] = useState(false);
  const changeState = () => {
    setToggle(!toggle);
  };
  const cardRef = useRef(null);

  useEffect(() => {
    toggle
      ? gsap.to(cardRef.current, {
          
          rotate: 30,
          duration: 1.2,
        })
      : gsap.to(cardRef.current, {
          
          rotate: 0,
          duration: 1.2,
        });
  }, [toggle]);

  return (
    <div  onClick={changeState} ref={cardRef}>
      <Image src={DevImgHeader} width="230px" height="230px" />
    </div>
  );
};



// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";

// /* test card */
// export const CardTest = () => {
//   const [toggle, setToggle] = useState(false);
//   const changeState = () => {
//     setToggle(!toggle);
//   };
//   const cardRef = useRef(null);

//   useEffect(() => {
//     toggle ? 
//     gsap.to(cardRef.current, {
//       scale: 1.5,
//       rotate: 360,
//       duration: 1.2,

//     })
//     : gsap.to(cardRef.current, {
//       scale:1,
//       rotate:0,
//       duration:1.2,
//     })
//   }, [toggle]);

//   return (
//     <div className={styles.card} onClick={changeState} ref={cardRef}>
//       Amsterdam
//     </div>
//   );
// };
