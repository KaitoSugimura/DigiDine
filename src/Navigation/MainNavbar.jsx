import React, { useEffect, useRef, useState } from "react";
import styles from "./MainNavbar.module.css";
import FoodData from "../FoodData.js";
import { useCategoryContext } from "../MainScreen.jsx";

export default function MainNavbar() {
  const buttonRefs = useRef([]);
  const listOfMenuItems = FoodData.map((item) => item[0]);
  const [maxWidth, setMaxWidth] = useState(0);
  const { currentCategory, setCurrentCategory } = useCategoryContext();

  useEffect(() => {
    const widths = buttonRefs.current.map((ref) => ref.offsetWidth);
    if (widths.length == listOfMenuItems.length) {
      setMaxWidth(Math.max(...widths));
    }
  }, [listOfMenuItems]);

  

  return (
    <div className={styles.root}>
      <div className={styles.foodList}>
        {listOfMenuItems.map((item, i) => {
          return (
            <button
              key={i}
              ref={(el) => (buttonRefs.current[i] = el)}
              style={maxWidth ? { width: maxWidth } : {}}
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
