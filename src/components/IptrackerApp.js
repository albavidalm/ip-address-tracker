import { useEffect, useState } from "react";
import getApiData from "./services/getApiData";
import Header from "./Header";
import Mapview from "./Mapview";
import InfoBox from "./InfoBox";

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
      <Header
        handleSubmit={handleSubmit}
        handleInputValue={handleInputValue}
        inputValue={inputValue}
        ipData={ipData}
      />

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
