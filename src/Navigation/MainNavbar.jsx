import React from 'react'
import styles from './MainNavbar.module.css'
import CategoryButton from './CategoryButton'

export default function MainNavbar() {
 
    const listOfMenuItems = ["Featured", "Burgers", "Pasta", "Salads", "Sides", "Desserts", "Drinks"]

    return (
    <div className={styles.root}>
        <div className={styles.foodList}>
        {
            listOfMenuItems.map((item, i)=>{
                return <CategoryButton key={i} foodName={item} />
            })
        }
        </div>
    </div>
  )
}
