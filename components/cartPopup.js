import { useState, useEffect, useRef } from "react";
import styles from "../styles/cart.module.css";

export default function cart() {
  const [storageArray, setStorageArray] = useState(
    JSON.parse(sessionStorage["cart"])
  );
  const price = useRef(null);
  const id = useRef(null);

  const incrementItem = (sym, item) => {
    sessionStorage.removeItem("cart");
    if (sym === "-" && item.qnt - 1 === 0) {
      sessionStorage.setItem(
        "cart",
        JSON.stringify(storageArray.filter((e) => e.name !== item.name))
      );
    } else if (sym === "+") {
      sessionStorage.setItem(
        "cart",
        JSON.stringify(storageArray.filter((e) => (e === item ? e.qnt++ : e)))
      );
    } else if (sym === "-") {
      sessionStorage.setItem(
        "cart",
        JSON.stringify(storageArray.filter((e) => (e === item ? e.qnt-- : e)))
      );
    }
    setStorageArray(JSON.parse(sessionStorage.getItem("cart")));
  };

  const removeCartItem = (item) => {
    sessionStorage.removeItem("cart");
    sessionStorage.setItem(
      "cart",
      JSON.stringify(storageArray.filter((e) => e.id !== item.id))
    );
    setStorageArray(JSON.parse(sessionStorage.getItem("cart")));
  };

  const TotalPrice = () => {
    price.current = 0;
    storageArray.forEach((e) => {
      price.current += e.price * e.qnt;
    });
    return (
      <div className={styles.priceContainer}>
        Total: {price.current} {price.current < 60 ? "+ 5 =" : null}{" "}
        {price.current < 60 ? price.current + 5 : null}{" "}
        {price.current < 60 ? "RON" : null} <p />{" "}
        {price.current >= 60
          ? null
          : "5 RON delivery fee only applies for orders under 60 RON"}
      </div>
    );
  };

  const FillCart = () => {
    id.current = 0;
    return (
      <>
        {storageArray.map((e) => (
          <div className={styles.cartItem} key={(e.id = id.current++)}>
            <button
              className={styles.cartItemBTN}
              onClick={() => removeCartItem(e)}
            >
              {" "}
              X
            </button>
            <button
              onClick={() => incrementItem("-", e)}
              className={styles.arrowBTN}
            >
              {"<"}
            </button>
            {e.qnt}
            <button
              onClick={() => incrementItem("+", e)}
              className={styles.arrowBTN}
            >
              {">"}
            </button>{" "}
            {e.name} {e.type} | Price: {e.price * e.qnt} RON &nbsp;
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={styles.cartContainer}>
      {sessionStorage.getItem("cart") !== "[]" ? (
        <>
          <FillCart />
          <TotalPrice />
        </>
      ) : (
        "The cart is empty"
      )}
    </div>
  );
}
