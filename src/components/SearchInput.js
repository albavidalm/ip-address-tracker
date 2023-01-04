const SearchInput = ({ handleSubmit, handleInputValue, inputValue }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="inputValue"
        type="search"
        placeholder="Search for any IP address or domain"
        id="inputValue"
        className="form__input"
        onChange={handleInputValue}
        value={inputValue}
      />
      <button className="form__input--button" type="submit" value="Send">
        <i className="fa-solid fa-angle-right form__input--button-arrow"></i>
      </button>
    </form>
  );
};
export default SearchInput;
