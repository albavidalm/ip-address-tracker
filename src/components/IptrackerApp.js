import { useEffect, useState } from "react";
import Mapview from "./Mapview";
import getApiData from "./services/getApiData";

const IptrackerApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [ipData, setIpData] = useState({});
  const [localIp, setlocalIp] = useState();

  useEffect(() => {
    if (localIp === undefined) {
      getIp();
      getApiData(localIp).then((response) => {
        setIpData(response);
      });
    }
    // eslint-disable-next-line
  }, []);

  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setlocalIp(data.ip);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    getApiData(inputValue).then((response) => {
      setIpData(response);
    });
  };

  const handleInputValue = (ev) => {
    setInputValue(ev.target.value);
  };
  return (
    <>
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
      <ul>
        <li>{ipData.ipAddress}</li>
        <li>location: {ipData.location}</li>
        <li>lat: {ipData.lat}</li>
        <li>lng: {ipData.lng}</li>
      </ul>
      {ipData.lat !== undefined && (
        <Mapview
          position={[ipData.lat, ipData.lng]}
          lat={ipData.lat}
          lng={ipData.lng}
        />
      )}
    </>
  );
};
export default IptrackerApp;
