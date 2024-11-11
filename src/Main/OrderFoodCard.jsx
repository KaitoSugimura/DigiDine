import React from "react";
import styles from "./OrderFoodCard.module.css";

export default function OrderFoodCard({
  image,
  title,
  price,
}) {
  return (
    <div className={styles.cardRoot}>
      <img src={image} className={styles.cardImage} />
      <h1 className={styles.cardTitle}>{title}</h1>
      <div className={styles.middleSection} >

      <div className={styles.cardListOfCustom}>
        <p>Custom 1</p>
        <p>Custom 2</p>
        <p>Custom 3</p>
      </div>
      <p className={styles.cardPrice}>${price}</p>
      </div>
      <div className={styles.bottomSection} >
        <button>Edit</button>
        <button>Remove</button>

        <div>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
