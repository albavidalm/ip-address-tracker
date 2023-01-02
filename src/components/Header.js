import SearchInput from "./SearchInput";

const Header = ({ updateInputValue, inputValue }) => {
  return (
    <header className="header wrapper">
      <h1 className="header__title">IP Address Tracker</h1>
      <SearchInput
        updateInputValue={updateInputValue}
        inputValue={inputValue}
      />
    </header>
  );
};
export default Header;
