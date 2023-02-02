import classNames from "classnames";
import { Btn } from "../Btn/Btn";
import styles from "./template.module.css";

export const Title = () => {
  return (
    <div className={styles.title_root}>
      <div className={styles.titele_container}>
        <h1 className={classNames(styles.title_gradient, styles.title_h1)}>
          Путешествие
        </h1>
        <h3 className={classNames(styles.title_gradient, styles.title_h3)}>
          на красную планету
        </h3>
      </div>
      <Btn />
    </div>
  );
};
