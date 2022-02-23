import React, { useEffect } from "react";
// import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import leaflet from "leaflet";
import useCurrentLocation from "../../ions/hooks/current-position";

const markerIcon = leaflet.divIcon({
	html: `
         <svg
           width="100"
           height="100"
           viewBox="0 0 100 100"
         >
          <path fill="currentColor" d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,
          12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3
          0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47
          17.5,2 12,2Z" />
         </svg>`,
	className: "",
	iconSize: [48, 48],
	iconAnchor: [12, 40],
});

const Location = () => {
	//here we use currentPosition hook, for firing our Button
	const position = useCurrentLocation();

	return (
		position && (
			<Marker position={position} icon={markerIcon}>
				<Popup>You are here!</Popup>
			</Marker>
		)
	);
};

export default Location;
