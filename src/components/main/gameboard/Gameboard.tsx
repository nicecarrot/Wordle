import styles from "../../../styles/main/_gamrboard.module.scss";
import Emptyrow from "./Emptyrow";
/*
            TILLE을 하나 만들고 타일을 엮어서 한 행을 만들고
            한 행을 엮어서 보드를 구성한다?
*/

const Gameboard = () => {
  return (
    <div className={styles.container}>
      <Emptyrow />
    </div>
  );
};

export default Gameboard;
