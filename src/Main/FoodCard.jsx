import React from "react";
import styles from "./FoodCard.module.css";

export default function FoodCard({ image, title, price }) {
  console.log(image);
  return (
    <div className={styles.cardRoot}>
      <div className={styles.imageParent}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>${price}</p>
        <button className={styles.addButton}>+</button>
      </div>
    </div>
  );
}
