import React, { createContext, useContext, useState } from "react";
import "./Reset.css";
import MainScreen from "./MainScreen";
import styles from "./App.module.css";
import StartScreen from "./StartScreen";
import OrderScreen from "./OrderScreen";
import OrderConfirmedScreen from "./OrderConfirmedScreen";
import { v4 as uuidv4 } from "uuid";

const ScreenContext = createContext();

export const useScreenContext = () => useContext(ScreenContext);

const OrderContext = createContext();

export const useOrderContext = () => useContext(OrderContext);

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("start");

  const [orderList, setOrderList] = useState([]);

  const getScreen = () => {
    switch (currentScreen) {
      case "start":
        return <StartScreen />;
      case "main":
        return <MainScreen />;
      case "order":
        return <OrderScreen />;
      case "orderConfirmed":
        return <OrderConfirmedScreen />;
      default:
        return <StartScreen />;
    }
  };

  const addOrder = ({ name, customizations, image, price, amount }) => {
    let isNew = true;
    setOrderList((prev) => {
      prev.forEach((item, i) => {
        if (
          item.name === name &&
          JSON.stringify(item.customizations) === JSON.stringify(customizations)
        ) {
          item.amount += amount ?? 1;
          isNew = false;
        }
      });
      if (isNew) {
        prev.push({
          name,
          amount: amount ?? 1,
          image,
          price,
          customizations: customizations,
          id: uuidv4(),
        });
      }
      return [...prev];
    });

    return isNew;
  };

  const editOrder = ({ id, customizations, amount, price }) => {
    setOrderList((prev) => {
      prev.forEach((item, i) => {
        if (item.id === id) {
          item.amount = amount;
          item.price = price;
          item.customizations = customizations;
        }
      });
      return [...prev];
    });
  };

  const incrementOrder = (name) => {
    setOrderList((prev) => {
      prev.forEach((item, i) => {
        if (item.name == name) {
          item.amount++;
        }
      });
      return [...prev];
    });
  };

  const decrementOrder = (name) => {
    setOrderList((prev) => {
      let done = false;
      prev.forEach((item, i) => {
        if (item.name == name) {
          if (item.amount > 1) {
            item.amount--;
          } else {
            prev.splice(i, 1);
          }
          done = true;
        }
      });
      return [...prev];
    });
  };

  const deleteOrder = (name) => {
    setOrderList((prev) => {
      prev.forEach((item, i) => {
        if (item.name == name) {
          prev.splice(i, 1);
        }
      });
      return [...prev];
    });
  };

  const resetOrder = () => {
    setOrderList([]);
  };

  const setScreen = (screen) => {
    if (screen == "start") {
      resetOrder();
    }
    setCurrentScreen(screen);
  };

  return (
    <ScreenContext.Provider value={{ setScreen }}>
      <OrderContext.Provider
        value={{
          orderList,
          addOrder,
          decrementOrder,
          deleteOrder,
          resetOrder,
          editOrder,
          incrementOrder,
        }}
      >
        <div className={styles.root}>
          <div className={styles.app}>{getScreen()}</div>
        </div>
      </OrderContext.Provider>
    </ScreenContext.Provider>
  );
}
