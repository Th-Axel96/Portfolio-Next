import { styles } from "./styles";
import Link from "next/link";

// icon burger
import MenuIcon from "@mui/icons-material/Menu";
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

// icon Social
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

// icon copyright
import CopyrightIcon from "@mui/icons-material/Copyright";

export const BurgerMenu = () => {
  return (
    // btn for burger
    <div className={styles.paddingIcoMenu}>
      <button
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        {/* ico menu burger */}
        <MenuIcon className={styles.aside.burgerIco} />
      </button>

      {/* div for OFF CANVA */}
      <div
        className={styles.offCanvaMenuBurger}
        // tabindex="-1"
        id="offcanvasExample"
      >
        {/* content aside fixed */}
        <div className={styles.aside.asideBg}>
          {/*div for  clear ICON */}
          <div className="flex justify-end">
            {/* bg icon rounded */}
            <button
              className={`${styles.aside.socialIconBg} ${styles.marginIcoCLear}`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <ClearIcon className={`${styles.aside.clearBurgerIco}`} />
            </button>
          </div>

          {/* bitmoji */}
          <div className={styles.aside.divBitmoji}>
            <Image src={bitmoji} width="125px" height="125px" />
          </div>

          {/* flex col content aside */}
          <h2 className={styles.aside.h2Name}>Moussart Axel</h2>
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
            {/* link cv */}
            <div
              className={`${styles.aside.socialIconBg} ${styles.flex.justifyCenter} ${styles.flex.itemsCenter}`}
            >
              <FileOpenIcon className={styles.aside.socialIcon} />
            </div>
          </div>
          {/* aside nav */}
          <nav className={styles.aside.navAside}>
            <ul>
              {/* link home */}
              <li className={styles.aside.navLi}>
                <a
                  className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                  href="#"
                >
                  <HomeIcon className={styles.aside.navIcon} />
                  Accueil
                </a>
              </li>
              {/* link about me */}
              <li>
                <a
                  // data-bs-toggle="offcanvas"
                  // data-bs-target="#offcanvasExample"
                  // aria-controls="offcanvasExample"
                  className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                  href="#aboutMe"
                >
                  <PersonIcon className={styles.aside.navIcon} />A propos de moi
                </a>
              </li>
              {/* link skils */}
              <li className={styles.aside.navLi}>
                <a
                  className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                  href="#mySkills"
                >
                  <DataObjectIcon className={styles.aside.navIcon} />
                  Mes compétences
                </a>
              </li>
              {/* link projects */}
              <li>
                <a
                  className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                  href="#myProject"
                >
                  <TopicIcon className={styles.aside.navIcon} />
                  Mes projets
                </a>
              </li>
              {/* link contact */}
              <li className={styles.aside.navLi}>
                <a
                  className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                  href="#contact"
                >
                  <CallIcon className={styles.aside.navIcon} />
                  Contact
                </a>
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
    </div>
  );
};
