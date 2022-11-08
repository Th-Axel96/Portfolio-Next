import { styles } from "./styles";
import Image from "next/image";
// icon import
import IconHtml from "../../assets/img/icon-html.svg";
import IconCss from "../../assets/img/icon-css.svg";
import IconJs from "../../assets/img/icon-js.svg";
import IconNode from "../../assets/img/icon-node.svg";
import IconReact from "../../assets/img/icon-react.svg";
import IconPhp from "../../assets/img/icon-php.svg";
import IconSymfony from "../../assets/img/icon-symfony.svg";
import IconGit from "../../assets/img/icon-git.svg";
import IconWebpack from "../../assets/img/icon-webpack.svg";
import IconBootstrap from "../../assets/img/icon-bootstrap.svg";
import IconTailwind from "../../assets/img/icon-tailwind.svg";

// aos animate
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const SectionSkills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // div for grid col6
    <div className={styles.grid.gridCol6}>
      {/* container */}
      <div className={styles.grid.colStart2}>
        <div id="mySkills" className={styles.containerDiv}>
          {/* div for AOS title & border */}
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            {/* title */}
            <h2 className={`${styles.body.title} ${styles.pt6}`}>
              Mes compétences
            </h2>
            {/* div for border title */}
            <div className={styles.body.borderTitle}></div>
          </div>
          {/* div for grid  */}
          <div className={`${styles.grid.gridCol2} ${styles.grid.lgGridCol3}`}>
            {/* div for justify-content */}
            <div
              data-aos="flip-left"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon HTML */}
              <div className={styles.boxIconSkills}>
                <Image src={IconHtml} />
                Html
              </div>
            </div>
            {/* div for justify-content*/}
            <div
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon CSS */}
              <div className={styles.boxIconSkills}>
                <Image src={IconCss} />
                Css
              </div>
            </div>
            {/* div for justify-content*/}
            <div
              data-aos="flip-left"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon JS */}
              <div className={styles.boxIconSkills}>
                <Image src={IconJs} />
                Javascript
              </div>
            </div>
            {/* div for justify-content*/}
            <div
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon Node */}
              <div className={styles.boxIconSkills}>
                <Image src={IconNode} />
                Node.js
              </div>
            </div>
            {/* div for justify-content*/}
            <div
              data-aos="flip-left"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon React */}
              <div className={styles.boxIconSkills}>
                <Image src={IconReact} />
                React
              </div>
            </div>
            {/* div for justify-content*/}
            <div
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon PHP */}
              <div className={styles.boxIconSkills}>
                <Image src={IconPhp} />
                Php
              </div>
            </div>
            {/* div for justify-content*/}
            <div
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon Symfony */}
              <div className={styles.boxIconSkills}>
                <Image src={IconSymfony} />
                Symfony
              </div>
            </div>
            {/* div for justify-content*/}
            <div
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon Git */}
              <div className={styles.boxIconSkills}>
                <Image src={IconGit} />
                Git
              </div>
            </div>
            {/* div for justify-content*/}
            <div
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon webpack */}
              <div className={styles.boxIconSkills}>
                <Image src={IconWebpack} />
                Webpack
              </div>
            </div>

            {/* div for justify-content*/}
            <div
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon Tailwind */}
              <div className={styles.boxIconSkills}>
                <Image src={IconTailwind} />
                Tailwind
              </div>
            </div>
            {/* div for justify-content*/}
            <div
              data-aos="flip-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              {/* box icon Bootstrap */}
              <div className={styles.boxIconSkills}>
                <Image src={IconBootstrap} />
                Bootstrap
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
