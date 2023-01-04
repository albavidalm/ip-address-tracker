const InfoBox = ({ ipData }) => {
  return (
    <ul className="info">
      <li className="info__title">
        IP ADDRESS<span className="info__data">{ipData.ipAddress}</span>
      </li>
      <li className="info__title">
        LOCATION<span className="info__data">{ipData.location}</span>
      </li>
      <li className="info__title">
        TIMEZONE<span className="info__data">{ipData.timezone}</span>
      </li>
      <li className="info__title">
        ISP<span className="info__data">{ipData.isp}</span>{" "}
      </li>
      <li>lat: {ipData.lat}</li>
      <li>lng: {ipData.lng}</li>
    </ul>
  );
};

export default InfoBox;
