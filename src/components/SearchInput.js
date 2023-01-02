const SearchInput = ({ updateInputValue, inputValue }) => {
  const handleOnChange = (ev) => {
    updateInputValue(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="searchIp"
        type="search"
        placeholder="Search for any IP address or domain"
        id="searchIp"
        className="header__input"
        onChange={handleOnChange}
        //value={inputValue}
      />
      <button type="submit" value="Send" />
    </form>
  );
};
export default SearchInput;
