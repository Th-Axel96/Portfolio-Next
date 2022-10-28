import { styles } from "./styles"
// import burger menu
import { BurgerMenu } from "../burgerMobile";
import { Typing } from "../js/typeAnimation";

export const ContentHeaderMobile = () => {
  return (
    <>
      <div className="h-screen bg-gray-600 ">
        {/*  */}
        <BurgerMenu />
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
          
        </div>
      </div>
    </>
  );
};
