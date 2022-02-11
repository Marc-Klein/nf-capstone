import React from "react";
import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import StyledMapContainer from "./styled.js";
import Location from "../get-position";

const Map = () => {
	return (
		<StyledMapContainer
			center={{ lat: 49.233334, lng: 7.0 }}
			zoom={[16]}
			scrollWheelZoom={false}
		>
			<TileLayer
				url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.ACCESS_TOKEN}`}
				zoomControl={false}
			/>
			<Location />
		</StyledMapContainer>
	);
};

export default Map;
