import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFkaWRhc2gxIiwiYSI6ImNsYjY5OHZ1NTBkZ2MzbnBnYTE0ano1cWQifQ.QUzrVjy2ysUN3BsZq798_w";

export default function Map({ flats }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("load", () => {
      flats.forEach((flat) => {
        if (flat.lng && flat.lat) {
          new mapboxgl.Marker()
            .setLngLat([flat.lng, flat.lat])
            .addTo(map.current);
        }
      });
    });
  });
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
