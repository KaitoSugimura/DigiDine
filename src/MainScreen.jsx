import styles from "./MainScreen.module.css";
import MainNavbar from "./Navigation/MainNavbar";
import FoodCard from "./Main/FoodCard";

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
const MainContext = createContext();

const CallStaffAudio = new Audio("./CallStaff.mp3");

export const useCategoryContext = () => useContext(CategoryContext);
export const useMainContext = () => useContext(MainContext);

function MainScreen() {
  const { setScreen } = useScreenContext();

  const orderRef = useRef(null);

  const {
    foodItems,
    orderList,
    resetOrder,
    currentCategory,
    setCurrentCategory,
    nextPage,
    backPage,
    viewDetails,
    setViewDetails,
    pageNo,
    deleteOrder,
  } = useOrderContext();

  const [confirmOrder, setConfirmOrder] = useState(false);

  const [showRestartDialog, setShowRestartDialog] = useState(false);
  const [showNoOrderDialog, setShowNoOrderDialog] = useState(false);
  const [showRemoveDialog, setItemToRemoveAndDialog] = useState(null);
  const [showStaffDialog, setShowStaffDialog] = useState(false);
  const animCallback = useRef(null);

  return (
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
      <MainContext.Provider value={{ setItemToRemoveAndDialog }}>
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
              animCallback={animCallback}
              edit={viewDetails.edit}
            />
          </div>
        )}

        {showNoOrderDialog && (
          <Dialog
            onClose={() => {
              setShowNoOrderDialog(false);
            }}
          >
            <div className={styles.confirmOrderCont}>
              <p className={styles.restartDialogText}>
                Please add some items to the order before proceeding.
              </p>
              <div className={styles.actionButtons}>
                <button
                  className={styles.okButton}
                  style={{
                    margin: "auto",
                  }}
                  onClick={() => {
                    setShowNoOrderDialog(false);
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </Dialog>
        )}

        {showRemoveDialog && (
          <Dialog
            onClose={() => {
              setShowRestartDialog(false);
            }}
          >
            <div className={styles.confirmOrderCont}>
              <p className={styles.removeDialogText}>
                Are you sure you want to remove this from your order?
              </p>

              <div className={styles.itemToRemove}>
                <OrderFoodCard {...showRemoveDialog} isFinal={true} />
              </div>

              <div className={styles.actionButtons}>
                <button
                  className={styles.cancelButton}
                  onClick={() => {
                    setItemToRemoveAndDialog(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={styles.restartActionButton}
                  onClick={() => {
                    deleteOrder(showRemoveDialog.id);
                    setItemToRemoveAndDialog(null);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </Dialog>
        )}

        {showStaffDialog && (
          <Dialog
            onClose={() => {
              setShowStaffDialog(false);
            }}
          >
            <div className={styles.confirmOrderCont}>
              <p className={styles.restartDialogText}>
                The Staff have been notified and will be with you shortly.
              </p>
              <div className={styles.actionButtons}>
                <button
                  className={styles.okButton}
                  style={{
                    margin: "auto",
                  }}
                  onClick={() => {
                    setShowStaffDialog(false);
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </Dialog>
        )}

        {showRestartDialog && (
          <Dialog
            onClose={() => {
              setShowRestartDialog(false);
            }}
          >
            <div className={styles.confirmOrderCont}>
              <p className={styles.restartDialogText}>
                Are you sure you want to restart the order?
              </p>
              <div className={styles.actionButtons}>
                <button
                  className={styles.cancelButton}
                  onClick={() => {
                    setShowRestartDialog(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={styles.restartActionButton}
                  onClick={() => {
                    resetOrder();
                    setShowRestartDialog(false);
                  }}
                >
                  Restart the order
                </button>
              </div>
            </div>
          </Dialog>
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
                          animCallback={animCallback}
                          orderRef={orderRef}
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
                    CallStaffAudio.volume = 0.15;
                    CallStaffAudio.play();
                    setShowStaffDialog(true);
                  }}
                >
                  Call Staff
                </button>
              </div>
              <div className={styles.orderListComp}>
                <OrderListComp
                  setViewDetails={setViewDetails}
                  orderRef={orderRef}
                />
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
                      setShowRestartDialog(true);
                    }}
                  >
                    Restart
                  </button>
                  <button
                    className={styles.orderButton}
                    onClick={() => {
                      if (orderList.length === 0) {
                        setShowNoOrderDialog(true);
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
      </MainContext.Provider>
    </CategoryContext.Provider>
  );
}

export default MainScreen;
