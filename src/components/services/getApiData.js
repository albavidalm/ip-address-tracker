const getApiData = () => {
  return fetch(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_mD3lwd9jqQ02Iiodbwo7hswGVeZck&ipAddress=8.8.8.8"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = {
        ipAddres: data.ip,
        location: `${data.location.city}, ${
          data.location.postalcode || "Unknown PC"
        } `,
        timezone: data.location.timezone,
        lat: data.location.lat,
        lng: data.location.lng,
        isp: data.isp,
      };
      return cleanData;
    })
    .catch((err) => console.error(err));
};

export default getApiData;
