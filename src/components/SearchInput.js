const SearchInput = ({ handleSubmit, handleInputValue, inputValue }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="inputValue"
        type="search"
        placeholder="Search for any IP address or domain"
        id="inputValue"
        className="header__input"
        onChange={handleInputValue}
        value={inputValue}
      />
      <input type="submit" value="Send" />
    </form>
  );
};
export default SearchInput;
