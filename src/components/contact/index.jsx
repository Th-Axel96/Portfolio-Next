import { styles } from "./styles";
// import form
import { FormContact } from "../formContact";

// icon contact
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationCityIcon from "@mui/icons-material/LocationCity";

import { motion } from "framer-motion";


export const SectionContact = () => {
  return (
    // grid
    <div className={styles.grid.gridCol6}>
      {/* start grid */}
      <div className={styles.grid.colStart2}>
        <div id="contact" className={`${styles.containerDiv}`}>
          {/* div for AOS title & border */}
          <div data-aos="fade-right" data-aos-duration="2000">
            {/* title */}
            <h2 className={styles.body.title}>Contact</h2>
            {/* div for border title*/}
            <div className={styles.body.borderTitle}></div>
          </div>
          <div>
            <FormContact />
          </div>
          {/* div for rows on lg */}
          <div className={styles.flex.lgFlexRow}>
            {/* content contact */}
            {/* mail */}
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              <a href="mailto:axelmoussart77@hotmail.com">
                <div className={styles.contact.containerContact}>
                  <EmailIcon className={styles.contact.sizeIcon} />
                  <p className={`${styles.body.paragraph}`}>
                    axelmoussartpro@gmail.com
                  </p>
                </div>
              </a>
            </div>
            {/* Phone */}
            <div
              data-aos="flip-right"
              data-aos-duration="2000"
              className={`${styles.flex.justifyCenter}`}
            >
              <div
                className={`${styles.contact.containerContact} ${styles.lgPx}`}
              >
                <PhoneIphoneIcon className={styles.contact.sizeIcon} />
                <p className={`${styles.body.paragraph} `}>
                  06 . 66 . 71 . 38 . 87
                </p>
              </div>
            </div>
            {/* City Location */}
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className={styles.flex.justifyCenter}
            >
              <div className={styles.contact.containerContact}>
                <LocationCityIcon className={styles.contact.sizeIcon} />
                <p className={`${styles.body.paragraph}`}>Meaux (77100)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
