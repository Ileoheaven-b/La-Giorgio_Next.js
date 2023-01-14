import { useState } from "react";
import styles from "../styles/menu.module.css";
import menuData from "../data/menuData.js";

const LoadMenu = () => {
  const [category, setCategory] = useState("categoryList");

  const checkSStorage = () => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("cart")) {
        return 0;
      } else {
        return 1;
      }
    }
  };

  const addToCart = (arg) => {
    if (checkSStorage()) {
      sessionStorage.setItem("cart", JSON.stringify([arg]));
    } else {
      const arr = JSON.parse(sessionStorage["cart"]);
      sessionStorage.removeItem("cart");
      let bool = 1;
      arr.forEach((element) => {
        if (element.name == arg.name) {
          bool = 0;
          element.qnt++;
        }
      });
      if (bool) {
        arg.qnt = 1;
        arr.push(arg);
      }
      sessionStorage.setItem("cart", JSON.stringify(arr));
    }
  };

  const LoadBackButton = () => {
    return (
      <button
        onClick={() => setCategory("categoryList")}
        className={styles.backButton}
      >
        Back
      </button>
    );
  };

  const LoadCategory = () => {
    const LoadChild = (argArr) => (
      <>
        {argArr.map((arg) => (
          <div className={styles.categoryChild} key={arg.name}>
            {arg.name}
            <>
              <button
                onClick={() => addToCart(arg)}
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </>
          </div>
        ))}
      </>
    );

    switch (category) {
      case "categoryList":
        return (
          <>
            {menuData.categoryArr.map((arg) => (
              <button
                onClick={() => setCategory(arg)}
                className={styles.categoryParent}
                key={arg}
              >
                {arg}
              </button>
            ))}
          </>
        );
      case "Pizza":
        return LoadChild(menuData.pizzaArr);
      case "Pasta":
        return LoadChild(menuData.pastaArr);
      case "Salad":
        return LoadChild(menuData.saladArr);
      case "Dessert":
        return LoadChild(menuData.dessertArr);
      case "Drink":
        return LoadChild(menuData.drinkArr);
    }
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className={styles.title}>Menu</div>
        <div className={styles.menuGrid}>
          <LoadCategory />
          {category != "categoryList" ? <LoadBackButton /> : null}
        </div>
      </div>
    </div>
  );
};

export default LoadMenu;
