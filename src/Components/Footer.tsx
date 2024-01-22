
const Footer = () => {
  const closeTime = "22:00:00"; 
  const currentDate = new Date().toLocaleTimeString();
//   console.log(currentDate);

const message =
currentDate === closeTime
  ? "Shop is closed."
  : `Shop is open. You can visit until ${closeTime}.`;

  return (
    <div className="footer">
      {`${currentDate} ${message}`}
    </div>
  );
};

export default Footer;
