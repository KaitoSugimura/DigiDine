import React, { useEffect, useRef, useState } from "react";
import styles from "./BottomNavbar.module.css";
import { useCategoryContext } from "../MainScreen.jsx";

export default function BottomNavbar({
  backPage,
  nextPage,
  pageNo,
  foodItems,
}) {
  const { currentCategory, setCurrentCategory } = useCategoryContext();

  const currentAmountOfPages = Math.ceil(foodItems[currentCategory].length / 6);

  return (
    <div className={styles.root}>
      <button
        className={styles.prevButton}
        disabled={pageNo == 0}
        onClick={() => {
          backPage();
        }}
      >
        <img src="./right-arrow.png" className={styles.prevButtonIMG} />
        {"Previous Page"}
      </button>

      <div>
        <div className={styles.circleCont}>
          {Array.from({ length: currentAmountOfPages }, (_, i) => i).map(
            (item, i) => {
              return (
                <div
                  key={i}
                  className={`${styles.circle} ${
                    pageNo == i ? styles.activeCircle : ""
                  }`}
                ></div>
              );
            }
          )}
        </div>
        <h1 className={styles.pageText}>
          Page {pageNo + 1}/{currentAmountOfPages}
        </h1>
      </div>

      <button
        className={styles.nextButton}
        disabled={foodItems[currentCategory].length <= pageNo * 6 + 6}
        onClick={() => {
          nextPage();
        }}
      >
        {"Next Page"}
        <img src="./right-arrow.png" className={styles.nextButtonIMG} />
      </button>
    </div>
  );
}
