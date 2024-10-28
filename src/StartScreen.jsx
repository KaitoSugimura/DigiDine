import React from 'react'
import styles from "./StartScreen.module.css";
import { useScreenContext } from './App';

export default function StartScreen() {
 const {setScreen} = useScreenContext();


  return (
    <div 
    className={styles.root}
    onClick={()=>{
        setScreen("main");
    }}>
        <img src="/start.png" alt="start" className={styles.image}/>
        <img src="/startButton.png" alt="start" className={styles.imageLayer}/>
    </div>
  )
}
