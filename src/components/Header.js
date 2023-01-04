import SearchInput from "./SearchInput";

const Header = ({ handleSubmit, handleInputValue, inputValue }) => {
  return (
    <header className="header wrapper">
      <h1 className="header__title">IP Address Tracker</h1>
      <SearchInput
        handleSubmit={handleSubmit}
        handleInputValue={handleInputValue}
        inputValue={inputValue}
      />
    </header>
  );
};
export default Header;
