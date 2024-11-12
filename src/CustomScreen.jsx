import React from "react";
import styles from "./CustomScreen.module.css";
import { useOrderContext } from "./App";

export default function CustomScreen({
  title,
  currentCategory,
  foodItems,
  close,
  edit,
}) {
  // get current food item with the same name as title
  const foodItem = foodItems[currentCategory].find(
    (item) => item.title === title
  );

  const { addOrder, editOrder } = useOrderContext();
  const [amountToAdd, setAmountToAdd] = React.useState(edit ? edit.amount : 1);
  const [price, setPrice] = React.useState(edit ? edit.price : foodItem.price);
  const [customizations, setCustomizations] = React.useState(
    (() => {
      if (edit?.customizations) {
        return edit.customizations.map((custom) =>
          custom.map((item) => ({
            ...item,
          }))
        );
      } else if (foodItem.customizations) {
        return foodItem.customizations.map((custom) =>
          custom.map((item) => ({
            title: item,
            selected: "Reg",
          }))
        );
      } else {
        return null;
      }
    })()
  );

  console.log(customizations);

  const createCustomButton = (custom, i, index, type) => {
    return (
      <button
        key={type}
        className={`${styles.customButton} ${
          custom.selected == type ? styles.selected : ""
        }`}
        onClick={() => {
          setCustomizations((prev) => {
            prev[i][index].selected = type;
            return [...prev];
          });
        }}
      >
        {type}
      </button>
    );
  };

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
          <p className={styles.priceTotal}>Total: </p>
          <p className={styles.priceActual}>
            ${parseFloat((foodItem.price * amountToAdd).toFixed(2))}
          </p>
          <span className={styles.priceTaxInc}>{" (Tax included)"}</span>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.customList}>
          {customizations ? (
            customizations.map((custom, i) => {
              return (
                <div key={i} className={styles.customItem}>
                  <h3 className={styles.customItemTitle}>
                    {i == 0 ? "What's on it" : "Add-Ons"}
                  </h3>
                  <div key={i} className={styles.customItemList}>
                    {custom.map((item, index) => (
                      <div key={index} className={styles.itemCont}>
                        <p className={styles.itemTitle}>{item.title}</p>
                        <div className={styles.customCont}>
                          {createCustomButton(item, i, index, "None")}
                          {createCustomButton(item, i, index, "Lite")}
                          {createCustomButton(item, i, index, "Reg")}
                          {createCustomButton(item, i, index, "Extra")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <p>No customizations available</p>
            </div>
          )}
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.cancelButton} onClick={close}>
            Cancel
          </button>
          <button
            className={styles.addButton}
            onClick={() => {
              console.log("AAAAAAAAAAAAAAAA");
              if (edit) {
                editOrder({
                  id: edit.id,
                  image: foodItem.image,
                  price,
                  amount: amountToAdd,
                  customizations,
                });
              } else {
                addOrder({
                  name: title,
                  image: foodItem.image,
                  price,
                  amount: amountToAdd,
                  customizations,
                });
              }
              close();
            }}
          >
            Add to order
          </button>
        </div>
      </div>
    </div>
  );
}
