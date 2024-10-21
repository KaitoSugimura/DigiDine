import React from 'react'
import styles from './MainNavbar.module.css'

export default function MainNavbar() {
 
    const listOfMenuItems = ["Featured", "Burgers", "Pasta", "Salads", "Sides", "Desserts", "Drinks"]

    return (
    <div className={styles.root}>
        l{
            listOfMenuItems.map((item)=>{
                return <button>
                    {item}
                </button>
            })
        }
    </div>
  )
}
