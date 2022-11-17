import { styles } from "./styles";

export const FormContact = () => {
  return (
    <div>
      {/* label & input name */}
      {/* div for rows md && justify-center */}
      <div className={`${styles.flex.mdRow} ${styles.flex.mdJustifyCenter}`}>
        {/* div for label */}
        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          className={styles.flex.justifyCenter}
        >
          <label id="hover-test" className={styles.contact.LabelContact}>
            Votre Nom :
          </label>
          <input id="hover-input"
            placeholder="Saisisez votre Nom"
            type="text"
            className={styles.contact.contactInput}
          />
        </div>
        {/* label & input email */}
        <div
          data-aos="flip-right"
         
          data-aos-duration="2000"
          className={styles.flex.justifyCenter}
        >
          <label  className={styles.contact.LabelContact}>
            Votre Email :
          </label>
          <input
            placeholder="Saisisez votre Email"
            type="text"
            className={styles.contact.contactInput}
          />
        </div>
      </div>
      {/* label & input email */}
      <div
        data-aos="flip-left"
        
        data-aos-duration="2000"
        className={styles.flex.justifyCenter}
      >
        <label  className={styles.contact.LabelContact}>
          Votre Message :
        </label>
        <input
          placeholder="Saisisez votre Message"
          type="text"
          className={styles.contact.contactInputMessage}
        />
      </div>
      {/* checkbox */}
      <div
        data-aos="fade-right"
       
        data-aos-duration="2000"
        className={styles.flex.justifyCenter}
      >
        <input
          type="checkbox"
          className={styles.contact.Checkbox}
          id="exampleCheck1"
        />
        <label class={styles.contact.LabelChecbbox} for="exampleCheck1">
          J&apos;accepte que mes données soient utilisées.
        </label>
      </div>

      <div
        data-aos="flip-left"
       
        data-aos-duration="2000"
        className={styles.flex.justifyCenter}
      >
        <button className={styles.contact.contactBtn}>Envoyer</button>
      </div>
    </div>
  );
};
