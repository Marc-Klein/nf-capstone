import React from "react";
import { useState } from "react";
import L from "leaflet";
import { useMapEvents, Marker, Popup } from "react-leaflet";
// import UserIcon from "./human-location.png";
// import markerIconPng from "leaflet/dist/images/human-location.png";

const GetIcon = _iconSize => {
	return L.icon({
		iconUrl: "human-location.png",
		iconSize: _iconSize,
	});
};

//maybe where the map gets rendered
const Location = locationFound => {
	const [position, setPosition] = useState(null);
	const map = useMapEvents({
		click() {
			map.locate(locationFound);
		},
		locationfound(event) {
			setPosition(event.latlng);
			// [16] sets the marker Zoom
			map.flyTo(event.latlng, [16]);
		},
	});
	return position === null ? null : (
		<Marker position={position} icon={GetIcon(20)}>
			<Popup>You are here!</Popup>
		</Marker>
	);
};

export default Location;
