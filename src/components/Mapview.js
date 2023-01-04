import { MapContainer, TileLayer } from "react-leaflet";
import Markerposition from "./Markerposition";
import "leaflet/dist/leaflet.css";

const Mapview = ({ position, lat, lng }) => {
  return (
    <MapContainer
      className="leafleft-container"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markerposition position={position} lat={lat} lng={lng} />
    </MapContainer>
  );
};

export default Mapview;
