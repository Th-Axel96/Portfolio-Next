import { styles } from "./styles";
import Image from "next/image";
import TpLandingPage from "../../assets/img/tp-landing-page.png";
import TpMazeBank from "../../assets/img/tp-mazebank.png";
import CvVanilla from "../../assets/img/cv-axel-html.png";
import TpWanaAgency from "../../assets/img/wana-agency.png";

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

          <p
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            className={styles.body.paragraph}
          >
            Voici la liste des projets que j&apos;ai réalisé au cours de ma
            formation.
          </p>

          {/* div for lg grid  */}
          <div className={styles.card.CardGrid}>
            {/* cards Landing Page */}
            <div className={styles.flex.justifyCenter}>
              <div
                data-aos="flip-left"
                data-aos-delay="50"
                data-aos-duration="2000"
                className={styles.card.contentCard}
              >
                <div data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <Image src={TpLandingPage} className={styles.card.CardImg} />
                </div>

                <div className={styles.p6}>
                  <h5 className={styles.card.titleProject}>TP Landing Page</h5>
                  <p className={styles.card.paragraph}>
                    Projet réaliser avec Bootstrap, reproduire une Landing Page.
                  </p>
                  <div className={styles.flex.justifyCenter}>
                    <button type="button" className={styles.card.btnLink}>
                      <a href="https://tp-landingpage.netlify.app/">
                        Voir le projet
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* cards Maze Bank */}
            <div className={styles.flex.justifyCenter}>
              <div
                data-aos="flip-right"
                data-aos-delay="50"
                data-aos-duration="2000"
                className={styles.card.contentCard}
              >
                <div data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <Image src={TpMazeBank} className={styles.card.CardImg} />
                </div>

                <div className={styles.p6}>
                  <h5 className={styles.card.titleProject}>TP Landing Page</h5>
                  <p className={styles.card.paragraph}>
                    Concevoir une application bancaire avec de l&apos;algorythme
                    Javascript.
                  </p>
                  <div className={styles.flex.justifyCenter}>
                    <button type="button" className={styles.card.btnLink}>
                      <a href="https://axel-mazebank.netlify.app/">
                        Voir le projet
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* cards Wana Agency */}
            <div className={styles.flex.justifyCenter}>
              <div
                data-aos="flip-left"
                data-aos-delay="50"
                data-aos-duration="2000"
                className={styles.card.contentCard}
              >
                <div data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <Image src={TpWanaAgency} className={styles.card.CardImg} />
                </div>

                <div className={styles.p6}>
                  <h5 className={styles.card.titleProject}>TP Agence Web</h5>
                  <p className={styles.card.paragraph}>
                    Projet de groupe, réaliser une Agence Web.
                  </p>
                  <div className={styles.flex.justifyCenter}>
                    <button type="button" className={styles.card.btnLink}>
                      <a href="https://wana-agency.netlify.app/">
                        Voir le projet
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* cards CV HTML*/}
            <div className={styles.flex.justifyCenter}>
              <div
                data-aos="flip-right"
                data-aos-delay="50"
                data-aos-duration="2000"
                className={styles.card.contentCard}
              >
                <div data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <Image src={CvVanilla} className={styles.card.CardImg} />
                </div>

                <div className={styles.p6}>
                  <h5 className={styles.card.titleProject}>Cv Html</h5>
                  <p className={styles.card.paragraph}>
                    Rédiger un CV en HTML/CSS vanilla.
                  </p>
                  <div className={styles.flex.justifyCenter}>
                    <button type="button" className={styles.card.btnLink}>
                      <a href="https://moussart-cv.netlify.app/">
                        Voir le projet
                      </a>
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
