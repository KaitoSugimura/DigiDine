import React, { createContext, useContext, useState } from "react";
import "./Reset.css";
import MainScreen from "./MainScreen";
import styles from "./App.module.css";
import StartScreen from "./StartScreen";
import OrderScreen from "./OrderScreen";
import OrderConfirmedScreen from "./OrderConfirmedScreen";

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

  const addOrder = (name, image, price) => {
    setOrderList((prev) => {
      let done = false;
      prev.forEach((item, i) => {
        if (item[0] == name) {
          item[1]++;
          done = true;
        }
      });
      if (!done) {
        prev.push([name, 1, image, price]);
      }
      return [...prev];
    });
  };

  const removeOrder = (name) => {
    setOrderList((prev) => {
      let done = false;
      prev.forEach((item, i) => {
        if (item[0] == name) {
          if (item[1] > 1) {
            item[1]--;
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
        if (item[0] == name) {
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
        value={{ orderList, addOrder, removeOrder, deleteOrder, resetOrder }}
      >
        <div className={styles.root}>
          <div className={styles.app}>{getScreen()}</div>
        </div>
      </OrderContext.Provider>
    </ScreenContext.Provider>
  );
}
