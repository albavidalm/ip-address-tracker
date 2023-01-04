import background from "../assets/images/pattern-bg.png";
import SearchInput from "./SearchInput";
import InfoBox from "./InfoBox";

const Header = ({ handleSubmit, handleInputValue, inputValue, ipData }) => {
  return (
    <header className="header">
      <img src={background} alt="blue background" className="header__img"></img>
      <h1 className="header__title">IP Address Tracker</h1>
      <section className="box wrapper">
        <SearchInput
          handleSubmit={handleSubmit}
          handleInputValue={handleInputValue}
          inputValue={inputValue}
        />
        <InfoBox ipData={ipData} />
      </section>
    </header>
  );
};
export default Header;
