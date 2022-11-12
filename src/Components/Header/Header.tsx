import "./Header.scss";

function Header(): JSX.Element {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getUTCDate();

  return (
    <div className="Header">
      <h1>My Shooes Store</h1>
      <h2>
        {day}.{month}.{year}
      </h2>
    </div>
  );
}

export default Header;
