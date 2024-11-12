import styles from "./MainScreen.module.css";
import MainNavbar from "./Navigation/MainNavbar";
import FoodCard from "./Main/FoodCard";
import FoodData from "./FoodData";
import { useRef, useState } from "react";
import { createContext, useContext } from "react";
import { useOrderContext, useScreenContext } from "./App";
import BottomNavbar from "./Navigation/BottomNavbar";
import CustomScreen from "./CustomScreen";
import OrderFoodCard from "./Main/OrderFoodCard";
import OrderListComp from "./Main/orderListComp";
import Dialog from "./Components/Dialog";
import { formatPrice } from "./util";

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

  const [confirmOrder, setConfirmOrder] = useState(false);

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
        {viewDetails && (
          <div className={styles.customRoot}>
            <CustomScreen
              currentCategory={currentCategory}
              title={viewDetails.name}
              foodItems={foodItems}
              close={() => {
                if (viewDetails) {
                  setViewDetails(undefined);
                }
              }}
              edit={viewDetails.edit}
            />
          </div>
        )}

        {confirmOrder && (
          <Dialog
            onClose={() => {
              setConfirmOrder(false);
            }}
          >
            <div className={styles.confirmOrderCont}>
              <div className={styles.confirmOrderContTop}>
                <div className={styles.confirmOrderContTopLeft}>
                  <p className={styles.confirmOrderText}>Order summary</p>
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
                  </div>{" "}
                </div>
                <div className={styles.orderListComp}>
                  <OrderListComp isFinal={true} />
                </div>
              </div>

              <div className={styles.actionButtons}>
                <button
                  className={styles.cancelButton}
                  onClick={() => {
                    setConfirmOrder(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={styles.addButton}
                  onClick={() => {
                    setConfirmOrder(false);
                    setScreen("orderConfirmed");
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </Dialog>
        )}

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
                          left={orderRef.current?.getBoundingClientRect().left}
                          setViewDetails={(item) => {
                            setViewDetails({ name: item, edit: undefined });
                          }}
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
                <div className={styles.orderTextCont}>
                  <p className={styles.orderText}>Order</p>
                  <p
                    className={styles.orderLength}
                  >{`(${orderList.length})`}</p>
                </div>
                <button
                  className={styles.callStaffButton}
                  onClick={() => {
                    CallStaffAudio.currentTime = 0;
                    CallStaffAudio.play();
                  }}
                >
                  Call Staff
                </button>
              </div>
              <div className={styles.orderListComp}>
                <OrderListComp setViewDetails={setViewDetails} />
              </div>

              <div className={styles.bottomCont}>
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
                <div className={styles.bottomButton}>
                  <button
                    className={styles.restartButton}
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
                      if (orderList.length === 0) {
                        return;
                      }
                      setConfirmOrder(true);
                    }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CategoryContext.Provider>
    </div>
  );
}

export default MainScreen;
