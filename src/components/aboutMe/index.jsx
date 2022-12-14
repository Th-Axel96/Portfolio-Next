import { styles } from "./styles";
import Image from "next/image";
import ImgCoding from "../../assets/img/coding-ilustration.svg";



export const AboutMe = () => {
  return (
    // grid
    <div className={styles.grid.gridCol6}>
      <div className={styles.grid.colStart2}>
        <div className={styles.containerDiv}>
          {/* div for AOS title & border */}
          <div
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-once="false"
          >
            {/* title about me */}
            <h2 id="aboutMe" className={styles.body.title}>
              A propos
            </h2>
            {/* div for broder title */}
            <div className={styles.body.borderTitle}></div>
          </div>
          {/* grid col 2 */}
          <div className={styles.grid.gridCol2}>
            {/* col-1 */}
            <div
              data-aos="flip-right"
              data-aos-duration="2000"
              data-aos-once="false"
              className={styles.flex.justifyItemsCenter}
            >
              {/* img illustration */}
              <Image src={ImgCoding} />
            </div>

            {/* paragraph content about me */}
            <div className={styles.flex.colCenter}>
              <p
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-once="false"
                className={`${styles.body.paragraph} `}
              >
                Passionné par le monde de l&apos;informatique, j&apos;ai
                commencé à jouer à des jeux en ligne (MMORPG, RTS, Hack
                &apos;n&apos; slash) et parcourir le web depuis mon plus jeune
                âge.
              </p>
              <p
                data-aos="fade-up-right"
                data-aos-duration="2000"
                data-aos-once="false"
                className={`${styles.body.paragraph} `}
              >
                Peu de temps après, j&apos;ai commencé à me tourner vers le
                Hardware, en démontant, changeant les pièces des PC et assembler
                des configurations.
              </p>
              <p
                data-aos="fade-up-right"
                data-aos-duration="2000"
                data-aos-once="false"
                className={`${styles.body.paragraph} `}
              >
                Décidant de me reconvertir, j&apos;ai souhaité me tourner vers
                un métier qui me passionne : le développement.
              </p>
              <p
                data-aos="fade-up-right"
                data-aos-duration="2000"
                data-aos-once="false"
                className={`${styles.body.paragraph}`}
              >
                N&apos;ayant aucune connaissance dans ce domaine, je me suis
                inscrit à une formation de développeur web et web mobile.
              </p>
              <p
                data-aos="fade-up-right"
                data-aos-duration="2000"
                data-aos-once="false"
                className={`${styles.body.paragraph}`}
              >
                Je suis aujourd&apos;hui à la recherche d&apos;un stage pour
                valider mon titre professionnel et d&apos;autres opportunités
                qui me seront offerte.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
