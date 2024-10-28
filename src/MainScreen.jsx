import styles from "./MainScreen.module.css";
import MainNavbar from "./Navigation/MainNavbar";
import FoodCard from "./Main/FoodCard";
import FoodData from "./FoodData";
import { useRef, useState } from "react";
import { createContext, useContext } from "react";

const CategoryContext = createContext();

export const useCategoryContext = () => useContext(CategoryContext);

function MainScreen() {
  const foodItems = FoodData.reduce(
    (acc, item) => ({ ...acc, [item[0]]: item[1] }),
    {}
  );

  const [currentCategory, _setCurrentCategory] = useState("Featured");
  const orderRef = useRef(null);

  const [orderList, setOrderList] = useState([]);

  const [pageNo, setPageNo] = useState(0);

  const [viewDetails, setViewDetails] = useState(undefined);

  const setCurrentCategory = (category) =>{
    _setCurrentCategory(category);
    setPageNo(0);
    setViewDetails(undefined);
  }

  const nextPage = ()=>{
    setPageNo((prev)=>{
      return prev + 1;    
    })
  }

  const backPage = ()=>{
    setPageNo((prev)=>{
      return prev - 1;    
    })
  }

  const addOrder = (name)=>{
    setOrderList((prev)=>{
      let done = false;
      prev.forEach((item, i)=>{
        if(item[0] == name){
          item[1]++;
          done = true;
        }
      });
      if(!done){
        prev.push([name, 1]);
      }
      return [...prev];
    })
  }

  

  return (
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory, orderList, addOrder }}>
      {/* Delte later */}
      <div style={{
              position: "fixed",
              top: 0,
              right: 0,
              backgroundColor: "white",
              zIndex: 10000,
              padding: 10
            }}>
              {orderList.map((item, i) => (
                <p key={i}>
                  {item[0]} x{item[1]}
                </p>
              ))}
            </div>



          <div className={styles.rootGrid}>
            <div className={styles.topNav}>
              <button className={styles.sideButtons} onClick={()=>{
                if(viewDetails){
                  setViewDetails(undefined);
                }
              }} style={{
                opacity: viewDetails ? 1 : 0
              }}>{"<"}</button>
              <h1>{currentCategory}</h1>
              <button className={styles.orderButton} ref={orderRef}>
                Order
                <div className={styles.orderAmount}>
                  {
                    orderList.reduce((acc, item)=>{
                      return acc + item[1];
                    }, 0)
                  }
                </div>
              </button>
            </div>
            {
            viewDetails? <div className={styles.mainGrid}>{viewDetails} details</div>:
              
     
            <div className={styles.mainGrid}>
              <button 
              className={styles.sideButtons}
              disabled={pageNo==0}
              onClick={()=>{
                backPage();
              }}>
                {"<"}
              </button>
            <div className={styles.cardGrid}>
              {foodItems[currentCategory].map((item, i) => {
                if(i >= pageNo*8 && i < (pageNo*8 + 8)){
                  return (
                    <FoodCard key={currentCategory + i} {...item} top={orderRef.current?.getBoundingClientRect().top} left={orderRef.current?.getBoundingClientRect().left}
                    setViewDetails={setViewDetails}
                    />
                  )
                }
              })}
            </div>     
            <button 
            className={styles.sideButtons}
            disabled={foodItems[currentCategory].length <= (pageNo*8 + 8)}
            onClick={()=>{
                nextPage();
              }}>
                {">"}
              </button>
            </div>}
            <div className={styles.navBar}>
              <MainNavbar />
            </div>
 
      </div>
    </CategoryContext.Provider>
  );
}

export default MainScreen;
