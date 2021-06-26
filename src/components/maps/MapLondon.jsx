import React, { useState } from "react";
import { Map, ZoomControl, Marker } from "pigeon-maps";

export default function MapLondon() {
  const [center, setCenter] = useState([51.50722, -0.1275]);
  const [zoom, setZoom] = useState(11);
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 42% 69%)`;
  return (
    <Map
      height={300}
      center={center}
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}
    >
      <Marker
        width={50}
        anchor={[51.50722, -0.1275]}
        color={color}
        onClick={() => setHue(hue + 20)}
      />
      <ZoomControl />
    </Map>
  );
}
