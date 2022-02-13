import React from "react";
import { useState } from "react";
import L from "leaflet";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import UserIcon from "../../../icons/simpleMarker.png";

const GetIcon = _iconSize => {
	return L.icon({
		iconUrl: UserIcon,
		iconSize: _iconSize,
	});
};

const Location = () => {
	const [position, setPosition] = useState(null);
	const map = useMapEvents({
		click() {
			map.locate();
		},
		locationfound(event) {
			setPosition(event.latlng);
			map.flyTo(event.latlng, [16]);
		},
	});
	return position === null ? null : (
		<Marker position={position} icon={GetIcon(20, 30)}>
			<Popup>You are here!</Popup>
		</Marker>
	);
};

export default Location;
