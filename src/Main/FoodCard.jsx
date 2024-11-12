import React, { useRef, useState } from "react";
import styles from "./FoodCard.module.css";
import { useOrderContext } from "../App";

let index = 1000;

export default function FoodCard({
  image,
  title,
  price,
  top,
  left,
  setViewDetails,
  orderRef,
}) {
  const { addOrder, orderList } = useOrderContext();

  const imageRef = useRef(null);

  const [objects, setObjects] = useState({});
  const [offSet, setOffSet] = useState(0);

  const handleTogglePosition = () => {
    const indexKey = index++;
    setObjects((prev) => {
      return {
        ...prev,
        [indexKey]: false,
      };
    });

    requestAnimationFrame(() => {
      setObjects((prev) => {
        return {
          ...prev,
          [indexKey]: true,
        };
      });
    });

    setTimeout(() => {
      setObjects((prev) => {
        delete prev[indexKey];
        return { ...prev };
      });
    }, 500);
  };

  return (
    <>
      {Object.keys(objects).length > 0 && (
        <>
          {Object.keys(objects).map((key, i) => {
            const isTopRight = objects[key];
            return (
              <div
                key={key}
                style={{
                  position: "fixed",
                  top: isTopRight
                    ? top + offSet
                    : imageRef.current?.getBoundingClientRect().top,
                  left: isTopRight
                    ? left
                    : imageRef.current?.getBoundingClientRect().left,
                  opacity: isTopRight ? 0 : 1,
                  width: isTopRight ? 100 : imageRef.current?.offsetWidth,
                  height: isTopRight ? 50 : imageRef.current?.offsetHeight,
                  transition:
                    "top 0.5s, left 0.5s, opacity 0.45s, width 0.5s, height 0.5s",
                  zIndex: key,
                }}
              >
                <div className={styles.imageParent}>
                  <img
                    src={image}
                    alt={title}
                    className={styles.image}
                    style={{
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </>
      )}
      <div
        className={styles.cardRoot}
        onClick={() => {
          setViewDetails(title);
        }}
      >
        <div className={styles.imageParent}>
          <img
            src={image}
            alt={title}
            className={styles.image}
            ref={imageRef}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.contentTitle}>{title}</h3>
          <div className={styles.priceCont}>
            <p className={styles.contentPrice}>${price}</p>
            <span
              className={styles.TaxIncludedSpan}
            >{`(Tax included)`}</span>{" "}
          </div>
          <button
            className={styles.addButton}
            onClick={(event) => {
              event.stopPropagation();
              const isNew = addOrder({
                name: title,
                image,
                price,
                customizations: null,
              });
              if (!isNew) {
                const orderListReverse = orderList.slice().reverse();
                let moreOffSet = 0;
                for (let i = 0; i < orderList.length; i++) {
                  let customizationOffset = 0;
                  let isCustomDefault = true;
                  if (orderListReverse[i].customizations) {
                    orderListReverse[i].customizations.forEach((custom, i) =>
                      custom.forEach((item) => {
                        const toTest = i ? "None" : "Reg";
                        if (item.selected == toTest) return;
                        isCustomDefault = false;
                        customizationOffset += 9;
                      })
                    );
                  }
                  if (isCustomDefault && orderListReverse[i].name == title) {
                    break;
                  } else {
                    moreOffSet += 100 + customizationOffset;
                  }
                }
                const scrollOffset = orderRef.current.scrollTop;
                moreOffSet -= scrollOffset;
                setOffSet(Math.max(-60, Math.min(moreOffSet, 360)));
              }
              handleTogglePosition();
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
