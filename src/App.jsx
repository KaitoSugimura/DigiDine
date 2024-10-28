import "./Reset.css";
import styles from "./App.module.css";
import MainNavbar from "./Navigation/MainNavbar";
import FoodCard from "./Main/FoodCard";
import FoodData from "./FoodData";
import { useRef, useState } from "react";
import { createContext, useContext } from "react";

const CategoryContext = createContext();

export const useCategoryContext = () => useContext(CategoryContext);

function App() {
  const foodItems = FoodData.reduce(
    (acc, item) => ({ ...acc, [item[0]]: item[1] }),
    {}
  );

  const [currentCategory, _setCurrentCategory] = useState("Featured");
  const orderRef = useRef(null);

  const [orderList, setOrderList] = useState([]);

  const [pageNo, setPageNo] = useState(0);

  const setCurrentCategory = (category) =>{

    _setCurrentCategory(category);
    setPageNo(0);
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
      <div className={styles.root}>
        <div className={styles.app}>
          <div className={styles.rootGrid}>
            <div className={styles.topNav}>
              <h1>{currentCategory}</h1>
              <button className={styles.orderButton} ref={orderRef}>
                Order
              </button>
            </div>
            <div className={styles.mainGrid}>
              <button 
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
                    <FoodCard key={currentCategory + i} {...item} top={orderRef.current?.getBoundingClientRect().top} left={orderRef.current?.getBoundingClientRect().left}/>
                  )
                }
              })}
            </div>
            <button 
            disabled={foodItems[currentCategory].length <= (pageNo*8 + 8)}
            onClick={()=>{
                nextPage();
              }}>
                {">"}
              </button>
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
