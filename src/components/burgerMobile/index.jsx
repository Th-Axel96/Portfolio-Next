import { styles } from "./styles";
import Link from "next/link";

import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { motion } from "framer-motion";
import React, { useState } from "react";

// icon burger

import ClearIcon from "@mui/icons-material/Clear";

import Image from "next/image";
import bitmoji from "../../assets/img/bitmoji.png";

// icon NAV
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DataObjectIcon from "@mui/icons-material/DataObject";
import TopicIcon from "@mui/icons-material/Topic";
import CallIcon from "@mui/icons-material/Call";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import BurgerImg from "../../assets/img/burger-bar.png";

// icon Social
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// icon copyright
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ScrollProgress } from "../scrollProgress";

export const BurgerMenu = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <div>
      {/* div content bandeau header mobile */}
      <div className="h-14 w-screen bg-gray-900 fixed z-20 shadow shadow-blue-400">
        {/* // btn for burger */}
        <button onClick={toggle} type="button">
          {/* ico menu burger */}

          <div className={styles.aside.burgerIco}>
            <Image height="40px" width="40px" src={BurgerImg} />
          </div>
        </button>
        {/* scroll for mobile */}
        <div className="h-1.5 bg-blue-200 shadow shadow-blue-400">
          <div>
            <ScrollProgress />
          </div>
        </div>
      </div>
      {show === true ? (
        // {/* div for OFF CANVA */}

        <div className={styles.offCanvaMenuBurger}>
          {/* content aside fixed */}
          <div className={styles.aside.asideBg}>
            {/*div for  clear ICON */}
            <div className="pl-4 pt-4">
              <div className={styles.aside.socialIconBg}>
                <button
                  className={`${styles.aside.clearBurgerIco}`}
                  onClick={toggle}
                >
                  <ClearIcon />
                </button>
              </div>
            </div>

            {/* bitmoji */}
            <div className={styles.aside.divBitmoji}>
              <Image src={bitmoji} width="125px" height="125px" />
            </div>

            {/* flex col content aside */}
            <h2 className={styles.aside.h2Name}>
              <span className={styles.aside.spanHover}>M</span>oussart&nbsp;
              <span className={styles.aside.spanHover}>A</span>xel
            </h2>
            {/* div for social icon */}
            <div className={`${styles.flex.justifyCenter} ${styles.mb8}`}>
              {/* link github */}

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Th-Axel96"
              >
                <div
                  className={`${styles.aside.socialIconBg} ${styles.flex.justifyCenter} ${styles.flex.itemsCenter} `}
                >
                  <motion.div
                    animate={{
                      scale: [1, 2, 2, 1],
                      rotate: [0, 30, -0, -30, 0],
                      y: [0, 5, -5, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 7,
                      delay: 1,
                    }}
                  >
                    <GitHubIcon className={styles.aside.socialIcon} />
                  </motion.div>
                </div>
              </a>
              {/* link linkdin */}

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/axel-moussart/"
              >
                <div
                  className={`${styles.aside.socialIconBg} ${styles.flex.justifyCenter} ${styles.flex.itemsCenter} ${styles.mx4}`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 2, 2, 1],
                      rotate: [0, 30, -0, -30, 0],
                      y: [0, 5, -5, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 7,
                      delay: 4,
                    }}
                  >
                    <LinkedInIcon className={`${styles.aside.socialIcon} `} />
                  </motion.div>
                </div>
              </a>
              {/* link cv */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/docs/cv-axel.pdf"
              >
                <div
                  className={`${styles.aside.socialIconBg} ${styles.flex.justifyCenter} ${styles.flex.itemsCenter}`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 2, 2, 1],
                      rotate: [0, 30, -0, -30, 0],
                      y: [0, 5, -5, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 7,
                      delay: 7,
                    }}
                  >
                    <FileOpenIcon className={styles.aside.socialIcon} />
                  </motion.div>
                </div>
              </a>
            </div>
            {/* aside nav */}
            <nav className={styles.aside.navAside}>
              <ul>
                {/* link home */}
                <li className={styles.aside.navLi}>
                  <AnchorLink
                    onClick={toggle}
                    className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                    href="#acceuilMobile"
                  >
                    <HomeIcon className={styles.aside.navIcon} />
                    Accueil
                  </AnchorLink>
                </li>
                {/* link about me */}
                <li>
                  <AnchorLink
                    onClick={toggle}
                    className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                    href="#aboutMe"
                  >
                    <PersonIcon className={styles.aside.navIcon} />A propos
                  </AnchorLink>
                </li>
                {/* link skils */}
                <li className={styles.aside.navLi}>
                  <AnchorLink
                    onClick={toggle}
                    className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                    href="#mySkills"
                  >
                    <DataObjectIcon className={styles.aside.navIcon} />
                    Mes compétences
                  </AnchorLink>
                </li>
                {/* link projects */}
                <li>
                  <AnchorLink
                    onClick={toggle}
                    className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                    href="#myProject"
                  >
                    <TopicIcon className={styles.aside.navIcon} />
                    Mes projets
                  </AnchorLink>
                </li>
                {/* link contact */}
                <li className={styles.aside.navLi}>
                  <AnchorLink
                    onClick={toggle}
                    className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                    href="#contact"
                  >
                    <CallIcon className={styles.aside.navIcon} />
                    Contact
                  </AnchorLink>
                </li>
              </ul>
            </nav>
            {/* copyright */}
            <div
              className={`${styles.flex.itemsEnd} ${styles.aside.copyrightDiv} ${styles.flex.justifyCenter}`}
            >
              <p>
                <CopyrightIcon className={`${styles.aside.copyrightIco} `} />
                Copyright &nbsp;
                <span className={styles.text.fontBold}>Moussart Axel</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
