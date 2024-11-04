import React from 'react'
import { useOrderContext, useScreenContext } from './App';
import styles from "./OrderScreen.module.css";

export default function OrderConfirmedScreen() {
  const {setScreen}=useScreenContext();
  const {orderList} = useOrderContext();

return (
  <div>
  <div >
            {orderList.map((item, i) => (
              <p key={i}>
                {item[0]} x{item[1]}
              </p>
            ))}
          </div>

          <button 
  className={styles.backButton}
  onClick={()=>{
      setScreen("start");
  }}>
    {"Done"}
  </button>
  </div>
)
}
