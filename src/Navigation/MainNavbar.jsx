import React, { useEffect, useRef, useState } from "react";
import styles from "./MainNavbar.module.css";
import FoodData from "../FoodData.js";
import { useCategoryContext } from "../MainScreen.jsx";

export default function MainNavbar() {
  const buttonRefs = useRef([]);
  const barRef = useRef(null);
  const listOfMenuItems = FoodData.map((item) => item[0]);
  const { currentCategory, setCurrentCategory } = useCategoryContext();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth((barRef.current.offsetWidth - 80) / listOfMenuItems.length);
    const handleResize = () => {
      setWidth(barRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.root} ref={barRef}>
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
              style={{
                width: width,
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
