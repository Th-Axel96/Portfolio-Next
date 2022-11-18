import { styles } from "./styles";
import { Typing } from "../js/typeAnimation";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import React from "react";
import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

export const ContentHeader = () => {
  return (
    // div for grid cols 6 &
    <div className={`${styles.grid.gridCol6}`}>
      {/* div for grid start & bg image ? */}
      <div className={`${styles.grid.colStart2}  `}>
        {/* div for BG header */}
        <div id="accueilDesktop" className={styles.contentHeader.bgHeader}>
          {/* div for blur */}
          <div className={styles.contentHeader.bgBlur}>
            {/* div for content text */}

            <div
              className={`${styles.flex.justifyColItemsCenter}  ${styles.hFull}`}
            >
              {/* div for BG GLASS */}
              <div
                data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                className={styles.bgGLass}
              >
                <h1 className={`${styles.contentHeader.nameHeader}`}>
                  <span className={styles.contentHeader.spanHover}>B</span>
                  ienvenue sur mon&nbsp;
                  <span className={styles.contentHeader.spanHover}>P</span>
                  ortfolio !
                </h1>
                <span className={styles.contentHeader.spanTyping}>
                  Je suis un développeur web&nbsp;
                  <Typing />
                </span>
              </div>
            </div>
            <div className={styles.contentHeader.btnEncre}>
              <AnchorLink href="#aboutMe">
                <KeyboardDoubleArrowDownIcon sx={{ fontSize: 75 }} />
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
