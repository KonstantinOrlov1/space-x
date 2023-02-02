import classNames from "classnames";
import styles from "./template.module.css";

export const Benefit = () => {
  return (
    <div className={styles.benedit_root}>
      <div className={styles.benedit_elem}>
        <span>мы</span>
        <h2 className={styles.benefit_title}>1</h2>
        <span>на рынке</span>
      </div>

      <div className={classNames(styles.benedit_elem, styles.right)}>
        <span>гарантируем</span>
        <div className={styles.center}>
          <h2 className={styles.benefit_title}>50%</h2>
          <span>безопасность</span>
        </div>
      </div>

      <div className={styles.benedit_elem}>
        <span>календарик за</span>
        <div className={styles.benefit_textcontainer}>
          <h2 className={styles.title}>2001</h2>
          <p className={styles.benefit_year}>г.</p>
        </div>
        <span>в подарок</span>
      </div>

      <div className={classNames(styles.benedit_elem, styles.right)}>
        <span>путешествие</span>
        <div className={styles.center}>
          <h2 className={styles.benefit_title}>597</h2>
          <span>дней</span>
        </div>
      </div>
    </div>
  );
};
