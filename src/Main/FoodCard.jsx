import React, { useRef, useState } from "react";
import styles from "./FoodCard.module.css";
import { useCategoryContext } from "../App";

export default function FoodCard({ image, title, price, top, left }) {

  const { addOrder } = useCategoryContext();

  const imageRef = useRef(null);

  const [objects, setObjects] = useState({});

  console.log(objects)

  const handleTogglePosition = () => {
    const randomValue = Math.random() * 100;
    setObjects((prev)=>{
      return {
        ...prev,
        [randomValue]: false
      }
    })

    requestAnimationFrame(() => {
      setObjects((prev)=>{
        return {
          ...prev,
          [randomValue]: true
        }
      })
    });

    setTimeout(()=>{
      setObjects((prev)=>{
        delete prev[randomValue];
        return {...prev}
      })
    }, 500);
  };

  return (
    <>
    {Object.keys(objects).length > 0 && <>
      {
        Object.keys(objects).map((key, i)=>{
          const isTopRight = objects[key];
          return (    <div key={key} 
            style={{
            position: "fixed",
            top: isTopRight ? top : imageRef.current?.getBoundingClientRect().top,
            left: isTopRight ? left : imageRef.current?.getBoundingClientRect().left,
            opacity: isTopRight ? 0 : 1,
            width: isTopRight ? 100 : imageRef.current?.offsetWidth,
            height: isTopRight ? 50 : imageRef.current?.offsetHeight,
            transition: "top 0.5s, left 0.5s, opacity 0.45s, width 0.5s, height 0.5s",
            zIndex: 1000,
          }}>
          <div className={styles.imageParent} 
    
          >
            <img src={image} alt={title} className={styles.image}       style={{
            borderRadius: "20px"
          }} />
            </div></div>)
        })
      }
    
    </>
}
    <div className={styles.cardRoot}>
      <div className={styles.imageParent}>
        <img src={image} alt={title} className={styles.image} ref={imageRef} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>${price}</p>
        <button className={styles.addButton} onClick={()=>{
          addOrder(title);
          handleTogglePosition();
        }}>+</button>
      </div>
    </div></>
  );
}
