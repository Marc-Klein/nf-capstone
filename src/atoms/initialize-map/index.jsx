import React, { useEffect } from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import StyledMapContainer from "./styled.js";
import useStore from "../../ions/store";

const Map = ({ poll = 1_000_000 }) => {
	const currentPosition = useStore(state => state.currentPosition);

	useEffect(() => {
		const setCurrentPosition = useStore.getState().setCurrentPosition;
		const interval = setInterval(() => {
			setCurrentPosition();
		}, poll);
		setCurrentPosition();
		return () => {
			clearInterval(interval);
		};
	}, [poll]);
	useEffect(() => {
		const latitude = currentPosition ? currentPosition.coords.latitude : undefined;
		console.log(
			currentPosition ? currentPosition.coords.latitude : "getting latitude",
			currentPosition ? currentPosition.coords.longitude : "getting longitude"
		);
	}, [currentPosition]);

	return (
		<StyledMapContainer
			center={[
				currentPosition ? currentPosition.coords.latitude : "getting latitude",
				currentPosition ? currentPosition.coords.longitude : "getting longitude",
			]}
			zoom={[16]}
			scrollWheelZoom={false}
		>
			<TileLayer
				url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFrbDg5IiwiYSI6ImNrejg4NHY3azA2djcybm8xdmx4M2xpdHcifQ.ftANL_cw0hp3m_NUP-CeoQ"
				attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
				zoomControl={false}
			/>
			<Marker draggable animate position={[49.233334, 7.0]}>
				<Popup>Here I am</Popup>
			</Marker>
		</StyledMapContainer>
	);
};

export default Map;
