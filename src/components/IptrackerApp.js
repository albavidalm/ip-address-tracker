import { useEffect, useState } from "react";
import Mapview from "./Mapview";
import getApiData from "./services/getApiData";

const IptrackerApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [ipData, setIpData] = useState({});
  const [localIp, setlocalIp] = useState();

  useEffect(() => {
    getIp();
    getApiData(localIp).then((response) => {
      setIpData(response);
    });
  }, []);

  useEffect(() => {
    getApiData(inputValue).then((response) => {
      setIpData(response);
    });
  }, [inputValue]);

  const getIp = async () => {
    // Connect ipapi.co with fetch()
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    // Set the IP address to the constant `ip`
    setlocalIp(data.ip);
    console.log(data.ip);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(inputValue);
  };

  const handleInputValue = (ev) => {
    ev.preventDefault();
    setInputValue(ev.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="inputValue"
          type="inputValue"
          placeholder="Search for any IP address or domain"
          id="inputValue"
          className="header__input"
          onChange={handleInputValue}
          //value={inputValue}
        />
        <input type="submit" value="Send" />
      </form>
      <ul>
        <li>{inputValue}</li>
        <li>location: {ipData.location}</li>
        <li>Your IP address is {localIp}</li>
      </ul>
      <Mapview />
    </>
  );
};
export default IptrackerApp;
