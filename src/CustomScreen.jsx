import React from "react";
import styles from "./CustomScreen.module.css";

export default function CustomScreen({
  title,
  currentCategory,
  foodItems,
  cancel,
}) {
  // get current food item with the same name as title
  const foodItem = foodItems[currentCategory].find(
    (item) => item.title === title
  );

  const [amountToAdd, setAmountToAdd] = React.useState(1);

  return (
    <div className={styles.root}>
      <div className={styles.leftSide}>
        <h1>{title}</h1>
        <div className={styles.imageCont}>
          <img src={foodItem.image} className={styles.image} />
        </div>
        <p className={styles.description}>{foodItem.detail}</p>
        <div className={styles.sliderCont}>
          <button
            className={styles.sliderButtonLeft}
            onClick={() => {
              setAmountToAdd((prev) => {
                if (prev > 1) {
                  return prev - 1;
                }
                return 1;
              });
            }}
          >
            -
          </button>
          <p className={styles.sliderText}>{amountToAdd}</p>
          <button
            className={styles.sliderButtonRight}
            onClick={() => {
              setAmountToAdd((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <div className={styles.priceCont}>
          <p>Total: </p>
          <p>${foodItem.price * amountToAdd}</p>
          <span>{' (Tax included)'}</span>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.customList}></div>
        <div className={styles.actionButtons}>
          <button className={styles.cancelButton} onClick={cancel}>
            Cancel
          </button>
          <button className={styles.addButton}>Add to order</button>
        </div>
      </div>
    </div>
  );
}
