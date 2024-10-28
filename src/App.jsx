import React, { createContext, useContext, useState } from 'react'
import "./Reset.css";
import MainScreen from './MainScreen';
import styles from "./App.module.css";
import StartScreen from './StartScreen';

const ScreenContext = createContext();

export const useScreenContext = () => useContext(ScreenContext);

export default function App() {

    const [currentScreen, setCurrentScreen] = useState("start");

    const getScreen = () => {
        switch(currentScreen){
            case "start":
                return <StartScreen />;
            case "main":
                return <MainScreen />;
            default:
                return <StartScreen />;
        }
    }

    const setScreen = (screen) => {
        setCurrentScreen(screen);
    }

  return (
    <ScreenContext.Provider value={{setScreen}}>
    <div className={styles.root}>
        <div className={styles.app}>
        {getScreen()}
    </div></div>
    </ScreenContext.Provider>
  )
}
