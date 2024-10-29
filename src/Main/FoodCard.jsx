import React, { useRef, useState } from "react";
import styles from "./FoodCard.module.css";
import { useCategoryContext } from "../MainScreen";

let index = 1000;

export default function FoodCard({ image, title, price, top, left, setViewDetails }) {

  const { addOrder } = useCategoryContext();

  const imageRef = useRef(null);

  const [objects, setObjects] = useState({});


  const handleTogglePosition = () => {
    const indexKey = index++;
    setObjects((prev)=>{
      return {
        ...prev,
        [indexKey]: false
      }
    })

    requestAnimationFrame(() => {
      setObjects((prev)=>{
        return {
          ...prev,
          [indexKey]: true
        }
      })
    });

    setTimeout(()=>{
      setObjects((prev)=>{
        delete prev[indexKey];
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
            zIndex: key,
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
    <div className={styles.cardRoot}
      onClick={()=>{
        setViewDetails(title);
      }}
    >
      <div className={styles.imageParent}>
        <img src={image} alt={title} className={styles.image} ref={imageRef} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>${price}</p>
        <button className={styles.addButton} onClick={(event)=>{
          addOrder(title);
          handleTogglePosition();
          event.stopPropagation();
        }}>+</button>
      </div>
    </div></>
  );
}