import styles from "./template.module.css";
import border from "./imgs/border.png";
import angle from "./imgs/angle.png";

export const Btn = () => {
  return (
    <button className={styles.btn}>
      {"Начать путешествовать"}
      <img src={border} className={styles.btn_border} />
      <img src={angle} className={styles.btn_angle_left} />
      <img src={angle} className={styles.btn_angle_right} />
    </button>
  );
};
