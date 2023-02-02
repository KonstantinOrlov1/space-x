import React from "react";
import { Header } from "../Header/Header";
import classNames from "classnames";
import styles from "./template.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={classNames(styles.root, styles.container)}>
      <Header />
      <>{children}</>
    </div>
  );
};
