import { useState } from "react";
import styles from "../../css_components/menu.module.css";
import menuJSON from "../../data/menu.json";

const LoadMenu = () => {
  const [category, setCategory] = useState("categoryList");
  //const menuData = JSON.parse(menuJSON);   Da eroare  JSON.parse: unexpected at line 1 column 2 of the JSON data
  //console.log(menuData);

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
    const LoadChild = (argArr) => (
      <>
        {argArr.map((arg) => (
          <div className={styles.categoryChild} key={arg.name}>
            {arg.name}
            <button
              onClick={() => addToCart(arg)}
              className={styles.addToCartBTN}
            >
              Add to cart
            </button>
          </div>
        ))}
      </>
    );

    const categoryArr = ["Pizza", "Pasta", "Salad", "Dessert", "Drink"];
    const pizzaArr = [
      {
        name: "Prosciutto",
        type: "Pizza",
        price: 19,
        id: -1,
        qnt: 0,
      },
      {
        name: "Quattro Formaggi",
        type: "Pizza",
        price: 20,
        id: -1,
        qnt: 0,
      },
      {
        name: "Quattro Stagione",
        type: "Pizza",
        price: 18,
        id: -1,
        qnt: 0,
      },
      {
        name: "Diavola",
        type: "Pizza",
        price: 19,
        id: -1,
        qnt: 0,
      },
      {
        name: "Giorgio",
        type: "Pizza",
        price: 22,
        id: -1,
        qnt: 0,
      },
    ];
    const pastaArr = [
      {
        name: "Carbonara",
        type: "Pasta",
        price: 25,
        id: -1,
        qnt: 0,
      },
      {
        name: "Bolognese",
        type: "Pasta",
        price: 24,
        id: -1,
        qnt: 0,
      },
      {
        name: "Seafood",
        type: "Pasta",
        price: 26,
        id: -1,
        qnt: 0,
      },
      { name: "Shrimp Pasta", type: "Pasta", price: 27, id: -1, qnt: 0 },
      {
        name: "Kalamata",
        type: "Pasta",
        price: 23,
        id: -1,
        qnt: 0,
      },
    ];
    const saladArr = [
      {
        name: "Ceaser",
        type: "Salad",
        price: 15,
        id: -1,
        qnt: 0,
      },
    ];
    const dessertArr = [
      {
        name: "Tiramisu",
        type: "Dessert",
        price: 25,
        id: -1,
        qnt: 0,
      },
      {
        name: "Lava Cake",
        type: "Dessert",
        price: 30,
        id: -1,
        qnt: 0,
      },
      {
        name: "Cheese Cake",
        type: "Dessert",
        price: 23,
        id: -1,
        qnt: 0,
      },
    ];
    const drinkArr = [
      { name: "Pepsi", type: "Drink", price: 8, id: -1, qnt: 0 },
      { name: "Coke", type: "Drink", price: 8, id: -1, qnt: 0 },
      {
        name: "Freedom",
        type: "Drink",
        price: 69,
        id: -1,
        qnt: 0,
      },
    ];
    switch (category) {
      case "categoryList":
        return (
          <>
            {categoryArr.map((arg) => (
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
        return LoadChild(pizzaArr);
      case "Pasta":
        return LoadChild(pastaArr);
      case "Salad":
        return LoadChild(saladArr);
      case "Dessert":
        return LoadChild(dessertArr);
      case "Drink":
        return LoadChild(drinkArr);
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
