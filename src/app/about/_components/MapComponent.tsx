"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/icons/map-marker-green.png",
  iconSize: [42, 42],
  popupAnchor: [0, -20],
});

const MapComponent = () => {
  return (
    <div className="h-[300px] w-full">
      <MapContainer
        center={[35.7209559, 50.987012]}
        zoom={16}
        zoomControl={false}
        className="h-full w-full rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[35.7209559, 50.987012]} icon={customIcon}>
          <Popup>رستوران ایتالیایی حس خاص</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
