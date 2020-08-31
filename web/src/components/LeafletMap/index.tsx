import React, { useState, useEffect } from 'react';

import { LatLngTuple, LeafletMouseEvent } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

import './styles.css';

interface Props {
  mapClicked?: (event: LeafletMouseEvent) => void;
  markerPosition: number[];
}

const LeafletMap: React.FC<Props> = (props) => {
  const [initialPosition, setInitialPosition] = useState<LatLngTuple>([0, 0]);

  useEffect(() => {
    if (new Set(props.markerPosition).size > 1) {
      if (new Set(initialPosition).size === 1) {
        setInitialPosition(props.markerPosition as LatLngTuple);
      }
    } else {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setInitialPosition([coords.latitude, coords.longitude]);
      });
    }
  }, [props.markerPosition, initialPosition]);

  console.log(props.markerPosition);

  return (
    <Map
      center={initialPosition}
      zoom={13}
      maxZoom={17}
      id="map"
      onClick={props.mapClicked}
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />

      <Marker
        position={(props.markerPosition || initialPosition) as LatLngTuple}
      />
    </Map>
  );
};

export default LeafletMap;
