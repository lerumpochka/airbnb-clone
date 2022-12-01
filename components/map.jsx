import React, { useEffect } from "react";

import mapboxgl from "!mapbox-gl"; 

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFkaWRhc2gxIiwiYSI6ImNsYjY5OHZ1NTBkZ2MzbnBnYTE0ano1cWQifQ.QUzrVjy2ysUN3BsZq798_w";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
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
  return (
    <div>
        <div ref={mapContainer} className="map-container" />
    </div>
  )

}
