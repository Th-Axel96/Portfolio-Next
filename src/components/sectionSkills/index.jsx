import { styles } from "./styles";
import Image from "next/image";
import IconHtml from "../../assets/img/icon-html.svg";
import IconCss from "../../assets/img/icon-css.svg";
import IconJs from "../../assets/img/icon-js.svg";
import IconNode from "../../assets/img/icon-node.svg";
import IconReact from "../../assets/img/icon-react.svg";
import IconPhp from "../../assets/img/icon-php.svg";

export const SectionSkills = () => {
  return (
    // div for grid col6
    <div className={styles.grid.gridCol6}>
      {/* container */}
      <div className={styles.grid.colStart2}>
        <div className={styles.containerDiv}>
          {/* title */}
          <h2 className={`${styles.body.title} ${styles.pt6}`}>
            Mes compétences
          </h2>
          {/* div for border title */}
          <div className={styles.body.borderTitle}></div>
          {/* div for grid  */}
          <div className={`${styles.grid.gridCol2} ${styles.grid.lgGridCol3}`}>
            {/* div for justify-content */}
            <div className={styles.flex.justifyCenter}>
              {/* box icon HTML */}
              <div className={styles.boxIconSkills}>
                <Image src={IconHtml} />
                Html
              </div>
            </div>
            {/* div for justify-content*/}
            <div className={styles.flex.justifyCenter}>
              {/* box icon CSS */}
              <div className={styles.boxIconSkills}>
                <Image src={IconCss} />
                Css
              </div>
            </div>
            {/* div for justify-content*/}
            <div className={styles.flex.justifyCenter}>
              {/* box icon JS */}
              <div className={styles.boxIconSkills}>
                <Image src={IconJs} />
                Javascript
              </div>
            </div>
            {/* div for justify-content*/}
            <div className={styles.flex.justifyCenter}>
              {/* box icon Node */}
              <div className={styles.boxIconSkills}>
                <Image src={IconNode} />
                Node.js
              </div>
            </div>
            {/* div for justify-content*/}
            <div className={styles.flex.justifyCenter}>
              {/* box icon React */}
              <div className={styles.boxIconSkills}>
                <Image src={IconReact} />
                React
              </div>
            </div>
            {/* div for justify-content*/}
            <div className={styles.flex.justifyCenter}>
              {/* box icon PHP */}
              <div className={styles.boxIconSkills}>
                <Image src={IconPhp} />
                Php
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
