import { styles } from "./styles";
import Image from "next/image";
import TpLandingPage from "../../assets/img/tp-landing-page.png";
import TpMazeBank from "../../assets/img/tp-mazebank.png";
import CvVanilla from "../../assets/img/cv-axel-html.png";
import TpWanaAgency from "../../assets/img/wana-agency.png";

// import icon
import ConstructionIcon from "@mui/icons-material/Construction";
// import Img

import ToolsImg from "../../assets/img/under-tools.png";
export const SectionProject = () => {
  return (
    // grid col 6
    <div className={styles.grid.gridCol6}>
      {/* grid start 2 */}
      <div className={styles.grid.colStart2}>
        {/* div contenair */}
        <div id="myProject" className={styles.containerDiv}>
          {/* div for AOS title & border */}
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            {/* title */}
            <h2 className={styles.body.title}>Mes projets</h2>
            {/* div for border */}
            <div className={styles.body.borderTitle}></div>
          </div>
          {/* 
          <p
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            className={styles.body.paragraph}
          >
            Voici la liste des projets que j&apos;ai réalisé au cours de ma
            formation.
          </p> */}

          {/* div for lg grid  */}
          <div className={styles.card.CardGrid}>
            {/* cards Landing Page */}
            {/* flex & hover Card */}
            <div
              className={`${styles.flex.justifyCenter}  ${styles.card.CardHover}`}
            >
              <div
                data-aos="flip-left"
                data-aos-delay="50"
                data-aos-duration="2000"
                className={styles.card.contentCard}
              >
                {/* Link a englob content */}
                {/* height IMG */}
                <div
                  className={styles.h36}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://tp-landingpage.netlify.app/"
                  >
                    <Image
                      src={TpLandingPage}
                      className={styles.card.CardImg}
                    />
                  </a>
                </div>

                <div className={styles.p6}>
                  <h5 className={styles.card.titleProject}>TP Landing Page</h5>
                  <p className={styles.card.paragraph}>
                    Projet réaliser avec Bootstrap, reproduire une Landing Page.
                  </p>
                  <div className={styles.flex.justifyCenter}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://tp-landingpage.netlify.app/"
                    >
                      <button type="button" className={styles.card.btnLink}>
                        Voir le projet
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* cards Maze Bank */}
            {/* flex & hover card */}
            <div
              className={`${styles.flex.justifyCenter}  ${styles.card.CardHover}`}
            >
              <div
                data-aos="flip-right"
                data-aos-delay="50"
                data-aos-duration="2000"
                className={styles.card.contentCard}
              >
                {/* Link a englob content */}
                {/* height IMG */}
                <div
                  className={styles.h36}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://axel-mazebank.netlify.app/"
                  >
                    <Image src={TpMazeBank} className={styles.card.CardImg} />
                  </a>
                </div>

                <div className={styles.p6}>
                  <h5 className={styles.card.titleProject}>TP MazeBank</h5>
                  <p className={styles.card.paragraph}>
                    Concevoir une application bancaire avec de l&apos;algorythme
                    Javascript.
                  </p>
                  <div className={styles.flex.justifyCenter}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://axel-mazebank.netlify.app/"
                    >
                      <button type="button" className={styles.card.btnLink}>
                        Voir le projet
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* cards Wana Agency */}
            {/* flex & hover card */}
            <div
              className={`${styles.flex.justifyCenter}  ${styles.card.CardHover}`}
            >
              <div
                data-aos="flip-left"
                data-aos-delay="50"
                data-aos-duration="2000"
                className={styles.card.contentCard}
              >
                {/* Link a englob content */}
                {/* height IMG */}
                <div
                  className={styles.h36}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wana-agency.netlify.app/"
                  >
                    <Image
                      src={TpWanaAgency}
                      height="800px"
                      className={styles.card.CardImg}
                    />
                  </a>
                </div>

                <div className={styles.p6}>
                  <h5 className={styles.card.titleProject}>TP Agence Web</h5>
                  <p className={styles.card.paragraph}>
                    Projet de groupe, réaliser une Agence Web.
                  </p>
                  <div className={styles.flex.justifyCenter}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wana-agency.netlify.app/"
                    >
                      <button type="button" className={styles.card.btnLink}>
                        Voir le projet
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* cards CV HTML*/}
            {/* flex & hover card */}
            <div
              className={`${styles.flex.justifyCenter}  ${styles.card.CardHover}`}
            >
              <div
                data-aos="flip-right"
                data-aos-delay="50"
                data-aos-duration="2000"
                className={styles.card.contentCard}
              >
                {/* Link a englob content */}
                {/* height IMG */}
                <div
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className={styles.h36}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://moussart-cv.netlify.app/"
                  >
                    <Image
                      src={CvVanilla}
                      height="600px"
                      className={styles.card.CardImg}
                    />
                  </a>
                </div>

                <div className={styles.p6}>
                  <h5 className={styles.card.titleProject}>Cv Html</h5>
                  <p className={styles.card.paragraph}>
                    Rédiger un CV en HTML/CSS vanilla.
                  </p>
                  <div className={styles.flex.justifyCenter}>
                    <button type="button" className={styles.card.btnLink}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://moussart-cv.netlify.app/"
                      >
                        Voir le projet
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* futur Projet 1 */}
            {/* flex & hover card */}
            <div
              className={`${styles.flex.justifyCenter}  ${styles.card.CardHover}`}
            >
              <div
                data-aos="flip-right"
                data-aos-delay="50"
                data-aos-duration="2000"
                className={styles.card.contentCard}
              >
                {/* Link a englob content */}
                {/* height IMG */}
                <div
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className={styles.h36}
                >
                  <div className={styles.card.IcoUnderConstruction}>
                    <Image src={ToolsImg} alt="tools image" />
                  </div>
                </div>

                <div className={styles.p6}>
                  <h5 className={styles.card.titleProject}>Future projet</h5>
                  <p className={styles.card.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit!
                  </p>
                  <div className={styles.flex.justifyCenter}>
                    <button type="button" className={styles.card.btnLink}>
                      Voir le projet
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* futur project 2 */}
            {/* flex & hover card */}
            <div
              className={`${styles.flex.justifyCenter}  ${styles.card.CardHover}`}
            >
              <div
                data-aos="flip-right"
                data-aos-delay="50"
                data-aos-duration="2000"
                className={styles.card.contentCard}
              >
                {/* Link a englob content */}
                {/* height IMG */}
                <div
                  className={styles.h36}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <div className={styles.card.IcoUnderConstruction}>
                    <Image src={ToolsImg} alt="tools image" />
                  </div>
                </div>

                <div className={styles.p6}>
                  <h5 className={styles.card.titleProject}>Future projet</h5>
                  <p className={styles.card.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit!
                  </p>
                  <div className={styles.flex.justifyCenter}>
                    <button type="button" className={styles.card.btnLink}>
                      Voir le projet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
