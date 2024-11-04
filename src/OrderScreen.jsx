import React from 'react'
import { useOrderContext, useScreenContext } from './App';
import styles from "./OrderScreen.module.css";

export default function OrderScreen() {
    const {setScreen}=useScreenContext();
    const {orderList, removeOrder, addOrder, deleteOrder} = useOrderContext();

  return (
    <div><button 
    className={styles.backButton}
    onClick={()=>{
        setScreen("main");
    }}>
      {"<"}
    </button>
    <div >
              {orderList.map((item, i) => (
                <div key={i}>
                <button onClick={()=>{
                    removeOrder(item[0]);
                }
                }>-</button>
                <p >
                  {item[0]} x{item[1]}
                </p>

                <button onClick={()=>{
                    addOrder(item[0]);
                }
                }>+</button>
                <button onClick={()=>{
                    deleteOrder(item[0]);
                }
                }>Delete</button>
                </div>
              ))}
            </div>

            <button 
    className={styles.backButton}
    onClick={()=>{
        setScreen("orderConfirmed");
    }}>
      {"Confirm order"}
    </button>
    </div>
  )
}
