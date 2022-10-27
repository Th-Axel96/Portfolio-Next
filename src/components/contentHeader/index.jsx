import { styles } from "./styles";

export const ContentHeader = () => {
  return (
    // div for grid cols 6
    <div className={`${styles.grid.gridCol6}`}>
      {/* div for grid start */}
      <div className={`${styles.grid.colStart2} `}></div>
      <div></div>
    </div>
  );
};
