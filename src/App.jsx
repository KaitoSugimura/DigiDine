import "./Reset.css";
import styles from "./App.module.css";
import MainNavbar from "./Navigation/MainNavbar";
import FoodCard from "./Main/FoodCard";
import FoodData from "./FoodData";
import { useState } from "react";
import { createContext, useContext } from "react";

const CategoryContext = createContext();

export const useCategoryContext = () => useContext(CategoryContext);

function App() {
  const foodItems = FoodData.reduce(
    (acc, item) => ({ ...acc, [item[0]]: item[1] }),
    {}
  );

  const [currentCategory, setCurrentCategory] = useState("Featured");

  return (
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
      <div className={styles.root}>
        <div className={styles.app}>
          <div>
            <div>
              <h1>{currentCategory}</h1>
            </div>
            <div className={styles.cardGrid}>
              {foodItems[currentCategory].map((item, i) => (
                <FoodCard key={i} {...item} />
              ))}
            </div>
            <div className={styles.navBar}>
              <MainNavbar />
            </div>
          </div>
        </div>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
