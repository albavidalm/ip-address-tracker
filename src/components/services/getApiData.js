const getApiData = (inputValue, localIp) => {
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  return fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_rW1s8LgC1goJAQLuoJUTM7xBlMy8U&${
      checkIpAddress.test(inputValue || localIp)
        ? `ipAddress=${inputValue || localIp}`
        : checkDomain.test(inputValue || localIp)
        ? `domain=${inputValue || localIp}`
        : ""
    }`
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = {
        ipAddress: data.ip || "Unknown IP",
        location: `${data.location.city || "Unknown city"} , ${
          data.location.postalcode || "Unknown PC"
        } `,
        timezone: data.location.timezone || "Unknown timezone",
        lat: data.location.lat || "Unknown lat",
        lng: data.location.lng || "Unknown lng",
        isp: data.isp || "Unknown isp",
      };
      return cleanData;
    })
    .catch((err) => console.error(err));
};
// https://geo.ipify.org/api/v2/country,city?apiKey=at_rW1s8LgC1goJAQLuoJUTM7xBlMy8U&ipAddress=8.8.8.8
export default getApiData;
