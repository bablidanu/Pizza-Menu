const Footer = () => {
  const hour = new Date().getHours();
  //     console.log(hour);
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //     console.log(isOpen);

  //   if (hour >= openour && hour <= closeHour) alert("we are currently Open!");
  //   else alert("Sorry! We are closed");
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>
            We are open until {closeHour}:00. Come visit us or order online.
          </p>
        ) : (
          <p>
            We are happy to welcome you between {openHour}:00 to {closeHour}:00
          </p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
};

export default Footer;
