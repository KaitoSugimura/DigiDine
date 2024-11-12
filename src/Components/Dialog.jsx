import React from "react";
import styles from "./Dialog.module.css";

// basic template for a popup dialog

export default function Dialog({ children, onClose }) {
  return (
    <div className={styles.dialog}>
      <div className={styles.backdrop} onClick={onClose}></div>
      <div className={styles.dialogContent}>{children}</div>
    </div>
  );
}
