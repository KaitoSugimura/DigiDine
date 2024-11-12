import React from "react";
import styles from "./orderListComp.module.css";
import { useOrderContext } from "../App";
import OrderFoodCard from "./OrderFoodCard";

export default function OrderListComp({
  setViewDetails = () => {},
  isFinal = false,
}) {
  const { orderList, currentCategory } = useOrderContext();

  return (
    <div className={styles.orderList}>
      {orderList
        .slice()
        .reverse()
        .map((item, i) => {
          return (
            <OrderFoodCard
              key={`${currentCategory}-${item.name}-${i}`}
              {...item}
              isFinal={isFinal}
              edit={() => {
                setViewDetails({
                  name: item.name,
                  edit: {
                    id: item.id,
                    amount: item.amount,
                    price: item.price,
                    customizations: item.customizations,
                  },
                });
              }}
            />
          );
        })}
    </div>
  );
}