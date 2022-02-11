import React from "react";
import { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import PositionIcon from "../position-icon";

const Location = () => {
	const [position, setPosition] = useState(null);
	const map = useMapEvents({
		click() {
			map.locate();
		},
		locationfound(event) {
			setPosition(event.latlng);
			map.flyTo(event.latlng, map.getZoom());
		},
	});
	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are here!</Popup>
		</Marker>
	);
};

export default Location;
