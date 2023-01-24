import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import location from "../assets/images/icon-location.svg";
import L from "leaflet";

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

  let iconMarker = L.icon({
    iconUrl: location,
    iconRetinaUrl: location,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [35, 45],
  });

  return (
    <>
      <Marker position={newposition} icon={iconMarker}>
        <Popup>This is the location of the IP Address or Domain</Popup>
      </Marker>
    </>
  );
};
export default Markerposition;
