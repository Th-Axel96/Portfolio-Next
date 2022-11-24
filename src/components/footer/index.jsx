import { styles } from "./styles";

import CopyrightIcon from "@mui/icons-material/Copyright";

export const SectionFooter = () => {
  return (
    <div className={` ${styles.grid.gridCol6}`}>
      {/* div for grid  */}

        <div className={styles.grid.colStart2}>
          <footer className="h-14  bg-gray-900 border-t-8 border-blue-500 from-cyan-500">
            {/* copyright */}
            <div
              className={` ${styles.aside.copyrightDiv} ${styles.flex.justifyCenter}`}
            >
              <p>
                <CopyrightIcon className={`${styles.aside.copyrightIco} `} />
                Copyright &nbsp;
                <span className={styles.text.fontBold}>Moussart Axel</span>
              </p>
            </div>
          </footer>
        </div>
     
    </div>
  );
};
