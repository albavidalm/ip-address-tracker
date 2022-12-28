import React from "react";
import Header from "./Header";
import Mapview from "./Mapview";
import getApiData from "./services/getApiData";

const IptrackerApp = () => {
  getApiData();
  return (
    <>
      <Header />
      <Mapview />
    </>
  );
};
export default IptrackerApp;
