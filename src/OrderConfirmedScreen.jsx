import React from "react";
import { useOrderContext, useScreenContext } from "./App";
import styles from "./OrderConfirmedScreen.module.css";
import OrderListComp from "./Main/orderListComp";

export default function OrderConfirmedScreen() {
  const { setScreen } = useScreenContext();

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Your order has been confirmed</h1>

      <OrderListComp isFinal={true} />

      <button
        className={styles.doneButton}
        onClick={() => {
          setScreen("start");
        }}
      >
        {"Done"}
      </button>
    </div>
  );
}
