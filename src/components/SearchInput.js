const SearchInput = ({ handleSubmit, handleInputValue, inputValue }) => {
  return (
    <form className="wrapper form" onSubmit={handleSubmit}>
      <input
        name="inputValue"
        type="search"
        placeholder="Search for any IP address or domain"
        id="inputValue"
        className="header__input"
        onChange={handleInputValue}
        value={inputValue}
      />
      <button className="header__input--button" type="submit" value="Send">
        <i className="fa-solid fa-angle-right header__input--button-arrow"></i>
      </button>
    </form>
  );
};
export default SearchInput;
