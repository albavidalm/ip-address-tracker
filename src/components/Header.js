const Header = () => {
  return (
    <header className="header wrapper">
      <h1 className="header__title">IP Address Tracker</h1>
      <input
        type="search"
        placeholder="Search for any IP address or domain"
        id="searchIp"
        className="header__input"
      ></input>
      {/* <button className="header__input--button">
        <i className="fas fa-angle-right header__input--button-arrow"></i>
      </button> */}
    </header>
  );
};
export default Header;
