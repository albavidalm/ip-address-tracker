const getApiData = () => {
  return fetch(
    "https://geo.ipify.org/api/v2/country,city?at_mD3lwd9jqQ02Iiodbwo7hswGVeZck=at_mD3lwd9jqQ02Iiodbwo7hswGVeZck&ipAddress=8.8.8.8"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cleanData = data.map((infoIp) => {
        return {
          ipAddres: infoIp.ip,
          location: `${infoIp.location.city} , ${infoIp.location.postalcode}`,
          timezone: infoIp.location.timezone,
          isp: infoIp.isp,
        };
      });
      return cleanData;
    })
    .catch((err) => console.error(err));
};

export default getApiData;
