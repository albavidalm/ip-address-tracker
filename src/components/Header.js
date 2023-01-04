import SearchInput from "./SearchInput";
import background from "../assets/images/pattern-bg.png";

const Header = ({ handleSubmit, handleInputValue, inputValue }) => {
  return (
    <header className="header">
      <img src={background} alt="blue background" className="header__img"></img>
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
