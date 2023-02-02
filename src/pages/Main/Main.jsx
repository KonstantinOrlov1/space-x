import { Benefit } from "../../components/Benefit/Benefit";
import { Title } from "../../components/Title/Title";
import styles from "./template.module.css";

export const Main = () => {
  return (
    <div className={styles.main_root}>
      <Title />
      <Benefit />
    </div>
  );
};
