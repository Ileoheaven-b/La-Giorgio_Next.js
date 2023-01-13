import { Component, useEffect, useState } from "react";
import styles from "../../css_components/cart.module.css";

const LoadCart = () => {
  const [storageArray, setStorageArray] = useState(
    JSON.parse(typeof window !== "undefined" ? sessionStorage["cart"] : null)
  );

  const incrementItem = (sym, item) => {
    if (sym == "-" && item.qnt - 1 == 0) {
      sessionStorage.removeItem("cart");
      sessionStorage.setItem(
        "cart",
        JSON.stringify(storageArray.filter((e) => e.name !== item.name))
      );
      setStorageArray(JSON.parse(sessionStorage.getItem("cart")));
    } else if (typeof window !== "undefined") {
      sessionStorage.removeItem("cart");
      if (sym == "+") {
        sessionStorage.setItem(
          "cart",
          JSON.stringify(storageArray.filter((e) => (e == item ? e.qnt++ : e)))
        );
      } else if (sym == "-") {
        sessionStorage.setItem(
          "cart",
          JSON.stringify(storageArray.filter((e) => (e == item ? e.qnt-- : e)))
        );
      }
      setStorageArray(JSON.parse(sessionStorage.getItem("cart")));
    }
  };

  const checkSStorage = () => {
    if (typeof window !== "undefined") {
      if (
        sessionStorage.getItem("cart") &&
        sessionStorage.getItem("cart") != "[]"
      ) {
        return 1;
      } else {
        return 0;
      }
    }
  };
  if (checkSStorage()) {
    const removeCartItem = (e) => {
      sessionStorage.removeItem("cart");
      sessionStorage.setItem(
        "cart",
        JSON.stringify(storageArray.filter((remID) => remID.id !== e.id))
      );
      setStorageArray(JSON.parse(sessionStorage.getItem("cart")));
    };

    const TotalPrice = () => {
      let price = 0;
      storageArray.forEach((element) => {
        price += element.price * element.qnt;
      });
      return (
        <div className={styles.priceContainer}>
          Total: {price >= 60 ? price : price} {price < 60 ? "+ 5 =" : null}{" "}
          {price < 60 ? price + 5 : null} {price < 60 ? "RON" : null}
          <p />{" "}
          {price >= 60
            ? ""
            : "5 RON delivery fee only applies for orders under 60 RON."}
        </div>
      );
    };

    const FillCart = () => {
      let id = 0;
      return (
        <>
          {storageArray.map((e) => (
            <div className={styles.cartItem} key={(e.id = id++)}>
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
              <button
                className={styles.cartItemBTN}
                onClick={() => removeCartItem(e)}
              >
                {" "}
                X
              </button>
            </div>
          ))}
        </>
      );
    };

    return (
      <>
        <div className={styles.cartContainer}>
          <div className={styles.cart}>
            <FillCart />
            <TotalPrice />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.cartContainer}>
          <div className={styles.cart}>The cart is empty.</div>
        </div>
      </>
    );
  }
};

export default LoadCart;
