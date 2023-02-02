import { NavLink } from "react-router-dom";
import styles from "./template.module.css";

export const BurgerMenu = () => {
  return (
    <div className={styles.root}>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/technologies">Технология</NavLink>
      <NavLink to="/schedule">График полетов</NavLink>
      <NavLink to="/guarantees">Гарантии</NavLink>
      <NavLink to="/about">О компании</NavLink>
      <NavLink to="/contacts">Контакты</NavLink>
    </div>
  );
};
