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
  const [initialMarkerPosition, setInitialMarkerPosition] = useState<number[]>([
    0,
    0,
  ]);

  useEffect(() => {
    if (!props.mapClicked && new Set(props.markerPosition).size > 1) {
      const initialPosition = props.markerPosition;
      setInitialPosition(initialPosition as LatLngTuple);
    } else {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const initialPosition = [coords.latitude, coords.longitude];
        setInitialPosition(initialPosition as LatLngTuple);
        setInitialMarkerPosition(initialPosition);
      });
    }
  }, [props.markerPosition, props.mapClicked]);

  return (
    <Map center={initialPosition} zoom={13} id="map" onClick={props.mapClicked}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={
          (new Set(props.markerPosition).size === 1
            ? initialMarkerPosition
            : props.markerPosition) as LatLngTuple
        }
      />
    </Map>
  );
};

export default LeafletMap;
