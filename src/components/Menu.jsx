import Pizza from "./Pizza";

const Menu = () => {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            photoName={pizza.photoName}
            price={pizza.price}
            ingredients={pizza.ingredients}
          />
        ))}
      </ul>
      {/* <Pizza
        name="Pizza Prosciutto"
        photoName="./pizzas/spinaci.jpg"
        price="30"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
      />
      <Pizza
        name="Focaccia"
        photoName="pizzas/focaccia.jpg"
        price=""
        ingredients="Bread with italian olive oil and rosemary"
        soldOut=""
      />
      <Pizza
        name="Pizza Margherita"
        photoName="pizzas/margherita.jpg"
        price=""
        ingredients="Tomato and mozarella"
        soldOut=""
      />
      <Pizza
        name="Pizza Spinaci"
        photoName="pizzas/spinaci.jpg"
        price=""
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        soldOut=""
      />
      <Pizza
        name="Pizza Funghi"
        photoName="pizzas/funghi.jpg"
        price=""
        ingredients="Tomato, mozarella, mushrooms, and onion"
        soldOut=""
      />
      <Pizza
        name="Pizza Salamino"
        photoName="pizzas/salamino.jpg"
        price=""
        ingredients="Tomato, mozarella, and pepperoni"
        soldOut=""
      /> */}
    </main>
  );
};

export default Menu;
