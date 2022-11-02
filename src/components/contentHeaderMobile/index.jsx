import { styles } from "./styles"
import Image from "next/image";
// import burger menu
import { BurgerMenu } from "../burgerMobile";
import { Typing } from "../js/typeAnimation";

// img
import DevImgHeader from "../../assets/img/Developer-img.svg"
import { RotateAnimation } from "../js/RotateImgHeader";



export const ContentHeaderMobile = () => {
  return (
    <>
      <div >
        {/*  */}
        <BurgerMenu  />
        <div
          className={`${styles.flex.justifyNameTyping} `}
        >
       
          
            <h1 className={`${styles.contentHeader.nameHeader}`}>
              Portfolio Moussart Axel
            </h1>
            <h2 className={styles.contentHeader.spanTyping}>
              Je suis Développeur
              <span className={styles.contentHeader.spanTypingBorder}>
                Web&nbsp;
                <Typing />
              </span>
            </h2>
{/* rotate IMG */}
<div className={styles.py20}>

<RotateAnimation />
</div>

          
        </div>
      </div>
    </>
  );
};



