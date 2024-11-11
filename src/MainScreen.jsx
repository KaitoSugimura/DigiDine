import styles from "./MainScreen.module.css";
import MainNavbar from "./Navigation/MainNavbar";
import FoodCard from "./Main/FoodCard";
import FoodData from "./FoodData";
import { useRef, useState } from "react";
import { createContext, useContext } from "react";
import { useOrderContext, useScreenContext } from "./App";
import BottomNavbar from "./Navigation/BottomNavbar";

const CategoryContext = createContext();

const CallStaffAudio = new Audio("./CallStaff.mp3");

export const useCategoryContext = () => useContext(CategoryContext);

function MainScreen() {
  const foodItems = FoodData.reduce(
    (acc, item) => ({ ...acc, [item[0]]: item[1] }),
    {}
  );

  const { setScreen } = useScreenContext();

  const [currentCategory, _setCurrentCategory] = useState("Featured");
  const orderRef = useRef(null);

  const { orderList, resetOrder } = useOrderContext();

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

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
        {viewDetails ? (
          <div className={styles.mainGrid}>
            {viewDetails} details{" "}
            <button
              className={styles.sideButtons}
              onClick={() => {
                if (viewDetails) {
                  setViewDetails(undefined);
                }
              }}
              style={{
                opacity: viewDetails ? 1 : 0,
              }}
            >
              {"<"}
            </button>
          </div>
        ) : (
          <div className={styles.mainRoot}>
            <div className={styles.mainRootLeft}>
              <div className={styles.rootGrid}>
                <div className={styles.navBar}>
                  <MainNavbar />
                </div>

                <div className={styles.mainGrid}>
                  <div className={styles.cardGrid}>
                    {foodItems[currentCategory].map((item, i) => {
                      if (i >= pageNo * 6 && i < pageNo * 6 + 6) {
                        return (
                          <FoodCard
                            key={`${currentCategory}-${item.name}-${i}`}
                            {...item}
                            top={orderRef.current?.getBoundingClientRect().top}
                            left={
                              orderRef.current?.getBoundingClientRect().left
                            }
                            setViewDetails={setViewDetails}
                          />
                        );
                      }
                    })}
                  </div>
                </div>
                <div className={styles.bottomNavBar}>
                  <BottomNavbar
                    backPage={backPage}
                    nextPage={nextPage}
                    pageNo={pageNo}
                    foodItems={foodItems}
                  />
                </div>
              </div>
            </div>
            <div className={styles.mainRootRight}>
              <div className={styles.sideOrderBar}>
                <div className={styles.orderCont}>
                  <h1>Order</h1>
                  <button
                    onClick={() => {
                      CallStaffAudio.currentTime = 0;
                      CallStaffAudio.play();
                    }}
                  >
                    Call Staff
                  </button>
                </div>
                <div className={styles.orderList}>
                  {orderList.map((item, i) => {
                    return (
                      <div key={i} className={styles.orderItem}>
                        <img
                          src={item[2]}
                          alt={item[0]}
                          className={styles.orderItemImage}
                        />
                        <div>
                          <p>{item[0]}</p>
                          <p>x{item[1]}</p>
                          <p>${item[3]}</p>
                          <button>Edit</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.bottomButton}>
                  <button
                    className={styles.deleteButton}
                    onClick={() => {
                      resetOrder();
                    }}
                  >
                    Restart
                  </button>
                  <button
                    className={styles.orderButton}
                    ref={orderRef}
                    onClick={() => {
                      setScreen("order");
                    }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </CategoryContext.Provider>
    </div>
  );
}

export default MainScreen;
