import Link from "next/link";
import { styles } from "./styles";
import Image from "next/image";
import bitmoji from "../../assets/img/bitmoji.png";
import React from "react";
import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { motion } from "framer-motion";

// icon NAV
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DataObjectIcon from "@mui/icons-material/DataObject";
import TopicIcon from "@mui/icons-material/Topic";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import CallIcon from "@mui/icons-material/Call";

// icon Social
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// icon copyright
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Transition } from "react-spring";

// aside for desktop
export const AsideHeader = () => {
  return (
    <aside className={`${styles.grid.gridCol6}`}>
      {/* div for fixed bar */}
      <div className={styles.aside.asideBg}>
        {/* content aside fixed */}
        <div className={styles.aside.divBitmoji}>
          <Image
            className="text-blue-500"
            src={bitmoji}
            width="125px"
            height="125px"
          />
        </div>
        {/* flex col content aside */}
        <h2 className={styles.aside.h2Name}>
          <span className={styles.aside.spanHover}>M</span>oussart &nbsp;
          <span className={styles.aside.spanHover}>A</span>xel
        </h2>
        {/* div for social icon */}
        <div className={styles.flex.justifyCenter}>
          {/* link github */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Th-Axel96"
          >
            <div
              className={`${styles.aside.socialIconBg} ${styles.flex.justifyCenter} ${styles.flex.itemsCenter}`}
            >
              <GitHubIcon className={styles.aside.socialIcon} />
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
              <LinkedInIcon className={`${styles.aside.socialIcon} `} />
            </div>
          </a>
          {/* link open CV */}
          <a target="_blank" rel="noopener noreferrer" href="/docs/cv-axel.pdf">
            <div
              className={`${styles.aside.socialIconBg} ${styles.flex.justifyCenter} ${styles.flex.itemsCenter}`}
            >
              <FileOpenIcon className={styles.aside.socialIcon} />
            </div>
          </a>
        </div>
        {/* aside nav */}
        <nav className={styles.aside.navAside}>
          <ul>
            {/* link home */}
            <motion.div
              whileHover={{
                x: 70,

                scale: 1.2,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              <li className={styles.aside.navLi}>
                <AnchorLink
                  className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                  href="#accueilDesktop"
                >
                  <HomeIcon className={styles.aside.navIcon} />
                  Accueil
                </AnchorLink>
              </li>
            </motion.div>
            {/* link about me */}
            <motion.div
              whileHover={{
                x: 70,

                scale: 1.2,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              <li>
                <AnchorLink
                  href="#aboutMe"
                  className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                >
                  <PersonIcon className={styles.aside.navIcon} />A propos
                </AnchorLink>
              </li>
            </motion.div>
            {/* link skils */}
            <motion.div
              whileHover={{
                x: 70,

                scale: 1.2,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              <li className={styles.aside.navLi}>
                <AnchorLink
                  className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                  href="#mySkills"
                >
                  <DataObjectIcon className={styles.aside.navIcon} />
                  Mes compétences
                </AnchorLink>
              </li>
            </motion.div>
            {/* link project */}
            <motion.div
              whileHover={{
                x: 70,

                scale: 1.2,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              <li>
                <AnchorLink
                  className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                  href="#myProject"
                >
                  <TopicIcon className={styles.aside.navIcon} />
                  Mes projets
                </AnchorLink>
              </li>
            </motion.div>
            {/* link contact */}
            <motion.div
              whileHover={{
                x: 70,

                scale: 1.2,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              <li className={styles.aside.navLi}>
                <AnchorLink
                  className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                  href="#contact"
                >
                  <CallIcon className={styles.aside.navIcon} />
                  Contact
                </AnchorLink>
              </li>
            </motion.div>
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
    </aside>
  );
};
