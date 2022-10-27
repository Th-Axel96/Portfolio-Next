import Link from "next/link";
import { styles } from "./styles";
import Image from "next/image";
import bitmoji from "../../assets/img/bitmoji.png";

// icon NAV
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DataObjectIcon from "@mui/icons-material/DataObject";
import TopicIcon from "@mui/icons-material/Topic";
import FileOpenIcon from "@mui/icons-material/FileOpen";

// icon Social
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

// icon copyright
import CopyrightIcon from "@mui/icons-material/Copyright";


// aside for desktop
export const AsideHeader = () => {
  return (
    <aside className={styles.grid.gridCol6}>
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
        <h2 className={styles.aside.h2Name}>Moussart Axel</h2>
        {/* div for social icon */}
        <div className={styles.flex.justifyCenter}>
          <div
            className={`${styles.aside.socialIconBg} ${styles.flex.justifyCenter} ${styles.flex.itemsCenter}`}
          >
            <GitHubIcon className={styles.aside.socialIcon} />
          </div>
          <div
            className={`${styles.aside.socialIconBg} ${styles.flex.justifyCenter} ${styles.flex.itemsCenter} ${styles.mx4}`}
          >
            <LinkedInIcon className={`${styles.aside.socialIcon} `} />
          </div>
          <div
            className={`${styles.aside.socialIconBg} ${styles.flex.justifyCenter} ${styles.flex.itemsCenter}`}
          >
            <EmailIcon className={styles.aside.socialIcon} />
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
                className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                href="#"
              >
                <PersonIcon className={styles.aside.navIcon} />A propos de moi
              </a>
            </li>
            {/* link skils */}
            <li className={styles.aside.navLi}>
              <a
                className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                href="#"
              >
                <DataObjectIcon className={styles.aside.navIcon} />
                Mes compétences
              </a>
            </li>
            <li>
              <a
                className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                href="#"
              >
                <TopicIcon className={styles.aside.navIcon} />
                Mes projets
              </a>
            </li>
            <li className={styles.aside.navLi}>
              <a
                className={`${styles.aside.HoverBlue} ${styles.flex.itemsEnd}`}
                href="#"
              >
                <FileOpenIcon className={styles.aside.navIcon} />
                CV
              </a>
            </li>
          </ul>
        </nav>
        {/* copyright */}
        <div className={`${styles.flex.itemsEnd} ${styles.aside.copyrightDiv} ${styles.flex.justifyCenter}`}>
          <p>
            <CopyrightIcon className={`${styles.aside.copyrightIco} `} />
            Copyright <span className={styles.text.fontBold}>Moussart Axel</span>
          </p>
        </div>
      </div>
    </aside>
  );
};
