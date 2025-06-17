import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const buildingIcon = new L.Icon({
  iconUrl: '/map/building.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

export default function LeafletMap({ locations, onMarkerClick }) {
  return (
    <MapContainer
      center={[47.2, 19.5]}
      zoom={7}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100%', borderRadius: '16px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> közreműködők'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(loc => (
        <Marker
          key={loc.id}
          position={loc.coords as [number, number]}
          icon={buildingIcon}
          eventHandlers={{
            click: () => onMarkerClick(loc)
          }}
        >
          <Popup>
            <b>{loc.name}</b>
            <br />
            {loc.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}