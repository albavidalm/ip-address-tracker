const InfoBox = ({ ipData }) => {
  return (
    <ul className="info">
      <ul>
        <li className="info__title">IP Address</li>
        <li className="info__data">{ipData.ipAddress}</li>
      </ul>
      <ul>
        <li className="info__title">Location</li>
        <li className="info__data">{ipData.location}</li>
      </ul>
      <ul>
        <li className="info__title">Timezone</li>
        <li className="info__data">{ipData.timezone}</li>
      </ul>
      <ul>
        <li className="info__title">ISP</li>
        <li className="info__data">{ipData.isp}</li>
      </ul>
    </ul>
  );
};

export default InfoBox;
