import React from "react";
import styles from "./OrderFoodCard.module.css";
import { useOrderContext } from "../App";
import { formatPrice } from "../util";
import { useMainContext } from "../MainScreen";

export default function OrderFoodCard({
  id,
  image,
  name,
  price,
  amount,
  customizations,
  edit,
  isFinal,
}) {
  const { decrementOrder, incrementOrder } = useOrderContext();
  const mainContext = useMainContext();
  const setItemToRemoveAndDialog = mainContext?.setItemToRemoveAndDialog;

  const getCustomizations = () => {
    let hasCustoms = false;
    const r = customizations?.map((custom, i) => (
      <div key={i} className={styles.customSection}>
        {custom.map((item, index) => {
          if (i == 0 && item.selected === "Reg") return;
          if (i == 1 && item.selected === "None") return;
          hasCustoms = true;
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
    ));

    if (!r || !hasCustoms) {
      return (
        <div key={"No Custom"} className={styles.customSection}>
          <div className={styles.customItem}>
            <p>No customizations</p>
          </div>
        </div>
      );
    }
    return r;
  };

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
            <div className={styles.cardListOfCustom}>{getCustomizations()}</div>
            <p className={styles.cardPrice}>{formatPrice(price * amount)}</p>
          </div>
        </div>
        {isFinal && <p className={styles.finalAmountText}>x{amount}</p>}
      </div>
      {!isFinal && (
        <div className={styles.bottomSection}>
          <div className={styles.bottomSectionButtons}>
            <button onClick={edit} className={styles.editButton}>
              Edit
            </button>
            <button
              className={styles.removeButton}
              onClick={() => {
                if (setItemToRemoveAndDialog)
                  setItemToRemoveAndDialog({
                    name,
                    id,
                    image,
                    customizations,
                    price,
                    amount,
                  });
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
                decrementOrder(id);
              }}
            >
              -
            </button>
            <p className={styles.sliderText}>{amount}</p>

            <button
              className={styles.sliderButtonRight}
              onClick={() => {
                incrementOrder(id);
              }}
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
