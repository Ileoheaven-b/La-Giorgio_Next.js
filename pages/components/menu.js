import { useState } from "react";
import styles from "../../css_components/menu.module.css";

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
    if (category != "categoryList") {
      return (
        <>
          <button
            onClick={() => setCategory("categoryList")}
            className={styles.backButton}
          >
            Back
          </button>
        </>
      );
    }
  };

  const LoadCategory = () => {
    switch (category) {
      case "categoryList":
        return (
          <>
            <button
              onClick={() => setCategory("pizza")} // setState() da eroare daca nu e intr-un arrow()...
              className={styles.categoryParent}
            >
              Pizza
            </button>
            <button
              onClick={() => setCategory("pasta")}
              className={styles.categoryParent}
            >
              Pasta
            </button>
            <button
              onClick={() => setCategory("salad")}
              className={styles.categoryParent}
            >
              Salad
            </button>
            <button
              onClick={() => setCategory("dessert")}
              className={styles.categoryParent}
            >
              Dessert
            </button>
            <button
              onClick={() => setCategory("drink")}
              className={styles.categoryParent}
            >
              Drink
            </button>
          </>
        );
      case "pizza":
        return (
          <>
            <div className={styles.categoryChild}>
              Prosciutto
              <button
                onClick={() =>
                  addToCart({
                    name: "Prosciutto Pizza",
                    price: 19,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Quattro Formaggi
              <button
                onClick={() =>
                  addToCart({
                    name: "Quattro Formaggi Pizza",
                    price: 20,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Quattro Stagione
              <button
                onClick={() =>
                  addToCart({
                    name: "Quattro Stagione Pizza",
                    price: 18,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Diavola
              <button
                onClick={() =>
                  addToCart({
                    name: "Diavola Pizza",
                    price: 19,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Giorgio
              <button
                onClick={() =>
                  addToCart({
                    name: "Giorgio Pizza",
                    price: 22,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
          </>
        );
      case "pasta":
        return (
          <>
            <div className={styles.categoryChild}>
              Carbonara
              <button
                onClick={() =>
                  addToCart({
                    name: "Carbonara Pasta",
                    price: 25,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Bolognese
              <button
                onClick={() =>
                  addToCart({
                    name: "Bolognese Pasta",
                    price: 24,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Seafood
              <button
                onClick={() =>
                  addToCart({
                    name: "Seafood Pasta",
                    price: 26,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Shrimp
              <button
                onClick={() =>
                  addToCart({ name: "Shrimp Pasta", price: 27, id: -1, qnt: 0 })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Kalamata
              <button
                onClick={() =>
                  addToCart({
                    name: "Kalamata Pasta",
                    price: 23,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
          </>
        );
      case "salad":
        return (
          <>
            <div className={styles.categoryChild}>
              Ceaser
              <button
                onClick={() =>
                  addToCart({ name: "Ceaser Salad", price: 15, id: -1, qnt: 0 })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
          </>
        );
      case "dessert":
        return (
          <>
            <div className={styles.categoryChild}>
              Tiramisu
              <button
                onClick={() =>
                  addToCart({
                    name: "Tiramisu Dessert",
                    price: 25,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Lava Cake
              <button
                onClick={() =>
                  addToCart({
                    name: "Lava Cake Dessert",
                    price: 30,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Cheese Cake
              <button
                onClick={() =>
                  addToCart({
                    name: "Cheese Cake Dessert",
                    price: 23,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
          </>
        );
      case "drink":
        return (
          <>
            <div className={styles.categoryChild}>
              Pepsi
              <button
                onClick={() =>
                  addToCart({ name: "Pepsi Drink", price: 8, id: -1, qnt: 0 })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Coke
              <button
                onClick={() =>
                  addToCart({ name: "Coke Drink", price: 8, id: -1, qnt: 0 })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.categoryChild}>
              Freedom
              <button
                onClick={() =>
                  addToCart({
                    name: "Freedom Drink",
                    price: 69,
                    id: -1,
                    qnt: 0,
                  })
                }
                className={styles.addToCartBTN}
              >
                Add to cart
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className={styles.title}>Menu</div>
        <div className={styles.menuGrid}>
          <LoadCategory />
          <LoadBackButton />
        </div>
      </div>
    </div>
  );
};

export default LoadMenu;
