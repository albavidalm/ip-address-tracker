import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";

const Mapview = () => {
  return (
    <MapContainer center={{ lat: "51.52437", lng: "13.41053" }} zoom={13}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
    </MapContainer>
  );
};

export default Mapview;
