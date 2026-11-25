'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Farm {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
  address: string;
  distance: number;
}

interface MapProps {
  farms: Farm[];
  selectedFarm: Farm | null;
}

export default function Map({ farms, selectedFarm }: MapProps) {
  useEffect(() => {
    // Add Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Center the map on Dhaka
  const dhakaCenter: [number, number] = [23.8103, 90.4125];

  return (
    <MapContainer
      center={selectedFarm ? selectedFarm.coordinates : dhakaCenter}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {farms.map((farm) => (
        <Marker
          key={farm.id}
          position={farm.coordinates}
          icon={icon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">{farm.name}</h3>
              <p className="text-sm">{farm.description}</p>
              <p className="text-sm mt-1">{farm.address}</p>
              <p className="text-sm text-muted-foreground mt-1">{farm.distance} km away</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}