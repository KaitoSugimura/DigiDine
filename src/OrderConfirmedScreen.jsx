import React from "react";
import { useOrderContext, useScreenContext } from "./App";
import styles from "./OrderConfirmedScreen.module.css";
import OrderListComp from "./Main/orderListComp";
import { formatPrice } from "./util";

export default function OrderConfirmedScreen() {
  const { setScreen } = useScreenContext();
  const { orderList } = useOrderContext();

  return (
    <div className={styles.root}>
      <div className={styles.leftSide}>
        <div className={styles.topCont}>
          <h1 className={styles.title}>Thank you for your order!</h1>
          <p>Your order will be delivered to your table shortly.</p>
        </div>{" "}
        <button
          className={styles.doneButton}
          onClick={() => {
            setScreen("start");
          }}
        >
          {"Done"}
        </button>
      </div>
      <div className={styles.rightSide}>
        <img src="./receipt.png" className={styles.receipt} />

        <div className={styles.imageTop}>
          <p className={styles.orderSum}>Order summary</p>
          <div className={styles.confirmList}>
            <OrderListComp isFinal={true} />
          </div>
          <div className={styles.priceCont}>
            <p className={styles.totalText}>Total:</p>
            <p className={styles.totalPrice}>
              {formatPrice(
                orderList.reduce(
                  (acc, item) => acc + item.price * item.amount,
                  0
                )
              )}
            </p>
            <span className={styles.taxInc}>{"(Tax included)"}</span>
          </div>
          <p className={styles.disclaim}>
            You will receive a physical receipt with your order.
          </p>
        </div>
      </div>
    </div>
  );
}
