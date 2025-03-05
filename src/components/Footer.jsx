const Footer = () => {
  //   const hour = new Date().getHours();
  //     console.log(hour);
  //   const openour = 10;
  //   const closeHour = 22;
  //   const isOpen = hour >= openour && hour <= closeHour;
  //     console.log(isOpen);

  //   if (hour >= openour && hour <= closeHour) alert("we are currently Open!");
  //   else alert("Sorry! We are closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are currently open!
    </footer>
  );
};

export default Footer;
