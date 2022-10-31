import { styles } from "./styles";
import Image from "next/image";
import ImgCoding from "../../assets/img/coding-ilustration.svg";

export const AboutMe = () => {
  return (
    <div className={styles.mx4}>
      {/* title about me */}
      <h2 className={styles.body.title}>A propos de moi</h2>
      {/* div for broder title */}
      <div className={styles.body.borderTitle}></div>
      {/* img illustration */}

      <Image src={ImgCoding} />

      {/* paragraph content about me */}
      <p className={`${styles.body.paragraph} ${styles.pt6}`}>
        Passionné par le monde de l&apos;informatique, j&apos;ai commencé à
        jouer à des jeux en ligne (MMORPG, RTS, Hack &apos;n&apos; slash) et
        parcourir le web depuis mon plus jeune âge.
      </p>
      <p className={`${styles.body.paragraph} ${styles.pt6}`}>
        Peu de temps après, j&apos;ai commencé à me tourner vers le Hardware, en
        démontant, changeant les pièces des PC et assemblé des configurations.
      </p>
      <p className={`${styles.body.paragraph} ${styles.pt6}`}>
        Décidant de me reconvertir, je voulais un métier qui me passionne, j'ai
        donc décidé de me tourner vers le développement.
      </p>
      <p className={`${styles.body.paragraph} ${styles.pt6}`}>
        Partant d&apos;aucune connaissance dans le domaine du developpement,
        j&apos;effectue une formation de développeur web et web mobile.
      </p>
      <p className={`${styles.body.paragraph} ${styles.pt6}`}>
        Je suis donc à la recherche d&apos;un stage pour validé mon titre
        professionnelle et d&apos;autres opportunités qui me seront offerte.
      </p>
    </div>
  );
};
