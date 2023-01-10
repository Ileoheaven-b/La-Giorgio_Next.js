import { Component, useEffect, useState } from "react";
import styles from "../../css_components/cart.module.css";

const LoadCart = () => {
  //Last item not refreshing component on removal !!!!
  if (
    sessionStorage.getItem("cart") &&
    sessionStorage.getItem("cart") != "[]"
  ) {
    const [storageArray, setStorageArray] = useState(
      JSON.parse(sessionStorage["cart"])
    );

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
        price += element.price;
      });
      return (
        <div className={styles.priceContainer}>
          Total: {price >= 60 ? price : price + 5} RON. <p />{" "}
          {price >= 60 ? "" : "Delivery 5 RON for orders under 60 RON."}
        </div>
      );
    };
    /*const FillCart = () => {
      let id = 0;

      return <>storageArray.map((e) => {
        e.id = id++;

        <div className={styles.cartItem} key={e.id}>
          {e.name} &nbsp;
          <button
            className={styles.cartItemBTN}
            onClick={() => removeCartItem(e)}
          >
            X
          </button>
        </div>;
      });
    };*/

    const FillCart = () => {
      let id = 0;
      return (
        <>
          {storageArray.map((e) => (
            <div className={styles.cartItem} key={(e.id = id++)}>
              {e.name} | Price: {e.price} RON &nbsp;
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
