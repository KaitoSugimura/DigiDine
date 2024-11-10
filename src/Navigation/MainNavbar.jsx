import React, { useEffect, useRef, useState } from "react";
import styles from "./MainNavbar.module.css";
import FoodData from "../FoodData.js";
import { useCategoryContext } from "../MainScreen.jsx";

export default function MainNavbar() {
  const buttonRefs = useRef([]);
  const listOfMenuItems = FoodData.map((item) => item[0]);
  const { currentCategory, setCurrentCategory } = useCategoryContext();

  return (
    <div className={styles.root}>
      <div className={styles.foodList}>
        {listOfMenuItems.map((item, i) => {
          return (
            <button
              key={i}
              ref={(el) => (buttonRefs.current[i] = el)}
              onClick={() => setCurrentCategory(item)}
              className={`${styles.button} ${
                currentCategory == item ? styles.active : ""
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
