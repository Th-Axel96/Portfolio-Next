import { styles } from "./styles";
import Image from "next/image";
// import burger menu
import { BurgerMenu } from "../burgerMobile";
import { Typing } from "../js/typeAnimation";

// img

import { RotateAnimation } from "../js/RotateImgHeader";

export const ContentHeaderMobile = () => {
  return (
    <>
      <div id="acceuilMobile">
        <BurgerMenu />
        <div className={`${styles.flex.justifyNameTyping} `}>
          <h1
            data-aos="fade-up-right"
            data-aos-duration="2000"
            data-aos-once="false"
            className={`${styles.contentHeader.nameHeader}`}
          >
            Bienvenue sur mon Portfolio
          </h1>
          <h2
            data-aos="fade-up-right"
            data-aos-duration="2000"
            data-aos-once="false"
            className={styles.contentHeader.spanTyping}
          >
            Je suis un développeur
            <span className={styles.contentHeader.spanTypingBorder}>
              web&nbsp;
              <Typing />
            </span>
          </h2>
          {/* rotate IMG */}
          <div
            data-aos="flip-right"
            data-aos-duration="2000"
             data-aos-once="false"
            className={styles.py20}
          >
            <RotateAnimation />
          </div>
        </div>
      </div>
    </>
  );
};
