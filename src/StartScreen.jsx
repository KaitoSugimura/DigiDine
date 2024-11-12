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
      <p>Start Screen</p>{" "}
    </div>
  );
}
