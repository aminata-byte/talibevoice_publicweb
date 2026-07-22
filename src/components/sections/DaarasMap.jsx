import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Users } from "lucide-react";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "./DaarasMap.css";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const SENEGAL_CENTER = [14.4974, -14.4524];

function DaarasMap({ daaras, onSelect }) {
  const daarasAvecPosition = daaras.filter((d) => d.latitude && d.longitude);

  return (
    <div className="daaras-map">
      <MapContainer
        center={SENEGAL_CENTER}
        zoom={7}
        scrollWheelZoom={true}
        className="daaras-map__container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {daarasAvecPosition.map((daara) => (
          <Marker
            key={daara.id}
            position={[daara.latitude, daara.longitude]}
            icon={defaultIcon}
            eventHandlers={{ click: () => onSelect(daara) }}
          >
            <Popup>
              <strong>{daara.nom}</strong>
              <br />
              {daara.localisation}
              <br />
              <Users size={12} style={{ display: "inline" }} /> {daara.talibés}{" "}
              talibés
              {daara.besoins > 0 && (
                <>
                  <br />
                  {daara.besoins} besoin{daara.besoins > 1 ? "s" : ""}
                </>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {daarasAvecPosition.length < daaras.length && (
        <p className="daaras-map__notice">
          {daaras.length - daarasAvecPosition.length} daara(s) sans
          coordonnées GPS, non affichée(s) sur la carte.
        </p>
      )}
    </div>
  );
}

export default DaarasMap;
