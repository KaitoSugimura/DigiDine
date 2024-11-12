import React from "react";
import { useOrderContext, useScreenContext } from "./App";
import styles from "./OrderScreen.module.css";

export default function OrderScreen() {
  const { setScreen } = useScreenContext();
  const { orderList, decrementOrder, addOrder, deleteOrder } =
    useOrderContext();

  return (
    <div>
      <button
        className={styles.backButton}
        onClick={() => {
          setScreen("main");
        }}
      >
        {"<"}
      </button>
      <div>
        {orderList.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => {
                decrementOrder(item.name);
              }}
            >
              -
            </button>
            <p>
              {item.name} x{item.amount}
            </p>

            <button
              onClick={() => {
                addOrder(item.name);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                deleteOrder(item.name);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        className={styles.backButton}
        onClick={() => {
          setScreen("orderConfirmed");
        }}
      >
        {"Confirm order"}
      </button>
    </div>
  );
}
