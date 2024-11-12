import React from "react";
import styles from "./OrderFoodCard.module.css";
import { useOrderContext } from "../App";

export default function OrderFoodCard({
  image,
  name,
  price,
  amount,
  customizations,
  edit,
}) {
  const { decrementOrder, incrementOrder, deleteOrder } = useOrderContext();

  return (
    <div className={styles.cardRoot}>
      <div className={styles.topSection}>
        <div>
          <div className={styles.cardImageParent}>
            <img src={image} className={styles.cardImage} />
          </div>
        </div>
        <div className={styles.contentMain}>
          <h1 className={styles.cardTitle}>{name}</h1>
          <div className={styles.middleSection}>
            <div className={styles.cardListOfCustom}>
              {customizations ? (
                customizations.map((custom, i) => (
                  <div key={i} className={styles.customSection}>
                    {custom.map((item, index) => {
                      if (item.selected === "Reg") return;
                      return (
                        <div key={index} className={styles.customItem}>
                          <p>
                            {item.selected == "None" ? "No" : item.selected}{" "}
                            {item.title.toLowerCase()}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ))
              ) : (
                <div key={"No Custom"} className={styles.customSection}>
                  <div className={styles.customItem}>
                    <p>No customizations</p>
                  </div>
                </div>
              )}
            </div>
            <p className={styles.cardPrice}>${price}</p>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.bottomSectionButtons}>
          <button onClick={edit} className={styles.editButton}>
            Edit
          </button>
          <button
            className={styles.removeButton}
            onClick={() => {
              deleteOrder(name);
            }}
          >
            Remove
          </button>
        </div>

        <div className={styles.sliderCont}>
          <button
            className={styles.sliderButtonLeft}
            onClick={() => {
              if (amount <= 1) {
                return;
              }
              decrementOrder(name);
            }}
          >
            -
          </button>
          <p className={styles.sliderText}>{amount}</p>

          <button
            className={styles.sliderButtonRight}
            onClick={() => {
              incrementOrder(name);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
