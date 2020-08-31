import React, { useState, useEffect } from 'react';

import { LatLngTuple, LeafletMouseEvent } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

import './styles.css';

interface Props {
  mapClicked: (event: LeafletMouseEvent) => void;
  markerPosition: number[];
}

const LeafletMap: React.FC<Props> = (props) => {
  const [initialPosition, setInitialPosition] = useState<LatLngTuple>([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setInitialPosition([coords.latitude, coords.longitude]);
    });
  }, []);

  console.log(props.markerPosition);

  return (
    <Map center={initialPosition} zoom={17} id="map" onClick={props.mapClicked}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={(props.markerPosition || initialPosition) as LatLngTuple}
      />
    </Map>
  );
};

export default LeafletMap;
