import React, { createContext, useContext, useState } from "react";
import "./Reset.css";
import MainScreen from "./MainScreen";
import styles from "./App.module.css";
import StartScreen from "./StartScreen";
import OrderScreen from "./OrderScreen";
import OrderConfirmedScreen from "./OrderConfirmedScreen";
import { v4 as uuidv4 } from "uuid";
import FoodData from "./FoodData";

const ScreenContext = createContext();

export const useScreenContext = () => useContext(ScreenContext);

const OrderContext = createContext();

export const useOrderContext = () => useContext(OrderContext);

export default function App() {
  const [foodItems, setFoodItems] = useState(
    FoodData.reduce((acc, item) => ({ ...acc, [item[0]]: item[1] }), {})
  );

  const [currentScreen, setCurrentScreen] = useState("start");

  const [orderList, setOrderList] = useState([]);

  const [currentCategory, _setCurrentCategory] = useState("Featured");
  const [pageNo, setPageNo] = useState(0);
  const [viewDetails, setViewDetails] = useState(undefined);
  const setCurrentCategory = (category) => {
    _setCurrentCategory(category);
    setPageNo(0);
    setViewDetails(undefined);
  };

  const nextPage = () => {
    setPageNo((prev) => {
      return prev + 1;
    });
  };

  const backPage = () => {
    setPageNo((prev) => {
      return prev - 1;
    });
  };

  const getScreen = () => {
    switch (currentScreen) {
      case "start":
        return <StartScreen />;
      case "main":
        return <MainScreen />;
      case "orderConfirmed":
        return <OrderConfirmedScreen />;
      default:
        return <StartScreen />;
    }
  };

  const addOrder = ({ name, customizations, image, price, amount }) => {
    let isNew = true;
    if (!customizations) {
      customizations = foodItems[currentCategory]
        .find((item) => item.title === name)
        .customizations?.map((custom, i) =>
          custom.map((item) => ({
            title: item.title,
            selected: i ? "None" : "Reg",
            price: item.price,
            priceType: i,
          }))
        );
    }
    orderList.forEach((item, i) => {
      if (
        item.name === name &&
        JSON.stringify(item.customizations) === JSON.stringify(customizations)
      ) {
        item.amount += amount ?? 1;
        isNew = false;
      }
    });
    if (isNew) {
      orderList.push({
        name,
        amount: amount ?? 1,
        image,
        price,
        customizations: customizations,
        id: uuidv4(),
      });
    }
    setOrderList([...orderList]);

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
          foodItems,
          orderList,
          addOrder,
          decrementOrder,
          deleteOrder,
          resetOrder,
          editOrder,
          incrementOrder,
          setCurrentCategory,
          nextPage,
          backPage,
          viewDetails,
          setViewDetails,
          currentCategory,
          pageNo,
        }}
      >
        <div className={styles.root}>
          <div className={styles.app}>{getScreen()}</div>
        </div>
      </OrderContext.Provider>
    </ScreenContext.Provider>
  );
}
