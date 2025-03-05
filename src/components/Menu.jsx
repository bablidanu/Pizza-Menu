import Pizza from "./Pizza";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
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
      />
    </main>
  );
};

export default Menu;
