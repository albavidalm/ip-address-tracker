import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const Markerposition = ({ position, lat, lng }) => {
  //console.log(lat, lng);
  const newposition = useMemo(() => {
    return [lat, lng];
  }, [lat, lng]);
  const map = useMap();

  useEffect(() => {
    map.flyTo(newposition, 13, {
      animate: true,
    });
  }, [map, newposition]);

  return (
    <>
      <Marker position={newposition}>
        <Popup>This is the location of the IP Address or Domain</Popup>
      </Marker>
    </>
  );
};
export default Markerposition;
