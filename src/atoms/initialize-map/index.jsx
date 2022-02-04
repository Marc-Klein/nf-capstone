import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styled from "@emotion/styled";

const StyledMapContainer = styled(MapContainer)`
	padding: 0;
	margin: 0;
	height: 100vh;
	width: 100vw;
`;

const Map = () => {
	return (
		<StyledMapContainer center={[49.233334, 7.0]} zoom={[16]} scrollWheelZoom={false}>
			<TileLayer
				url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFrbDg5IiwiYSI6ImNrejg4NHY3azA2djcybm8xdmx4M2xpdHcifQ.ftANL_cw0hp3m_NUP-CeoQ"
				attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
			/>
			<Marker draggable animate position={[49.233334, 7.0]}>
				<Popup>Here I am</Popup>
			</Marker>
		</StyledMapContainer>
	);
};

export default Map;
