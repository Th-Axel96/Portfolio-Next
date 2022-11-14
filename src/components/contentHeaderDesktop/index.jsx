import { styles } from "./styles";
import { Typing } from "../js/typeAnimation";

export const ContentHeader = () => {
  return (
    // div for grid cols 6 &
    <div className={`${styles.grid.gridCol6}`}>
      {/* div for grid start & bg image ? */}
      <div className={`${styles.grid.colStart2}  `}>
        {/* div for BG header */}
        <div  className={styles.contentHeader.bgHeader}>
          {/* div for blur */}
          <div className={styles.contentHeader.bgBlur}>
            {/* div for content text */}

            <div
              className={`${styles.flex.justifyColItemsCenter}  ${styles.hFull}`}
            >
              {/* div for BG GLASS */}
              <div
                data-aos="flip-right"
                data-aos-delay="50"
                data-aos-duration="3000"
                className={styles.bgGLass}
              >
                <h1 className={`${styles.contentHeader.nameHeader}`}>
                  Bienvenue sur mon Portfolio
                </h1>
                <span className={styles.contentHeader.spanTyping}>
                  Je suis Développeur Web&nbsp;
                  <Typing />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
