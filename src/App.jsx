import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainNavbar from './Navigation/MainNavbar';

function App() {

  const width = 1024;
  const height = 768;


  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "auto"
    }}>
    <div style={{
      width: width,
      height: height,
      border: "1px solid black",
      position: "relative",
      margin: "auto"
    }}>
      <div>


        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0
        }}>
          <MainNavbar/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
