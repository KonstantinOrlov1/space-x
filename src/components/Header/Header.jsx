import { Link, NavLink } from "react-router-dom";
import styles from "./template.module.css";
import logo from "./imgs/logo.png";
import angle from "./imgs/angle.png";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

export const Header = () => {
  let [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <header className={styles.header_root}>
        <Link to="/" className={styles.header_logo}>
          <img src={logo} alt="логотип" className={styles.header_logo_img} />
          <img
            src={angle}
            alt="логотип"
            className={styles.header_angle_right_top}
          />
          <img
            src={angle}
            alt="логотип"
            className={styles.header_angle_right_bottom}
          />
          <img
            src={angle}
            alt="логотип"
            className={styles.header_angle_left_top}
          />
          <img
            src={angle}
            alt="логотип"
            className={styles.header_angle_left_bottom}
          />
        </Link>
        <div className={styles.header_nav}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/technologies">Технология</NavLink>
          <NavLink to="/schedule">График полетов</NavLink>
          <NavLink to="/guarantees">Гарантии</NavLink>
          <NavLink to="/about">О компании</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </div>
        <div className={styles.burger} onClick={open}></div>
      </header>
      {isOpen ? <BurgerMenu /> : null}
    </div>
  );
};
