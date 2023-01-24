const InfoBox = ({ ipData }) => {
  return (
    <ul className="info">
      <ul className="info__box">
        <li className="info__box--title">IP Address</li>
        <li className="info__box--data">{ipData.ipAddress}</li>
      </ul>
      <ul className="info__box">
        <li className="info__box--title">Location</li>
        <li className="info__box--data">{ipData.location}</li>
      </ul>
      <ul className="info__box">
        <li className="info__box--title">Timezone</li>
        <li className="info__box--data">UTC {ipData.timezone}</li>
      </ul>
      <ul className="info__box">
        <li className="info__box--title">ISP</li>
        <li className="info__box--data">{ipData.isp}</li>
      </ul>
    </ul>
  );
};

export default InfoBox;
