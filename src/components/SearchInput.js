const SearchInput = () => {
  const handleOnChange = (ev) => {
    console.log(ev.target.value);
  };
  return (
    <input
      name="searchIp"
      type="search"
      placeholder="Search for any IP address or domain"
      id="searchIp"
      className="header__input"
      onChange={handleOnChange}
    />

    /* <button className="header__input--button">
        <i className="fas fa-angle-right header__input--button-arrow"></i>
      </button> */
  );
};
export default SearchInput;
