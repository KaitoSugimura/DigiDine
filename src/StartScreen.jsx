import React from "react";
import styles from "./StartScreen.module.css";
import { useScreenContext } from "./App";

export default function StartScreen() {
  const { setScreen } = useScreenContext();

  return (
    <div
      className={styles.root}
      onClick={() => {
        setScreen("main");
      }}
    >
      <img src="startpage.png" alt="start" className={styles.image}></img>
      <p className={styles.imagePress}>Tap anywhere to start</p>
    </div>
  );
}
