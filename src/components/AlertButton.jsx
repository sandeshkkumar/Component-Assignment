// Q12: Button click -> alert
function AlertButton() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default AlertButton;
