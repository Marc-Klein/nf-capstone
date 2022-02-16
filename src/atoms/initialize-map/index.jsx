import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import StyledMapContainer from "./styled.js";
import Location from "../get-position";
import React, { useCallback, useEffect } from "react";
import { useMap } from "react-leaflet";
import Leaflet from "leaflet";
import { css, Global } from "@emotion/react";

const createLeafletButton = (label, { onClick, className, position }) => {
	const LeafletButton = Leaflet.Control.extend({
		onAdd: map => {
			const button = Leaflet.DomUtil.create("button", className);
			button.innerHTML = label;
			if (onClick) {
				button.addEventListener("click", () => {
					onClick(map);
				});
			}
			return button;
		},
	});
	return new LeafletButton({ position });
};

const LeafletButton = ({ children, onClick, className, position }) => {
	const map = useMap();
	useEffect(() => {
		console.log("tick");
		const control = createLeafletButton(children, { onClick, className, position });
		control.addTo(map);
		return () => {
			control.remove();
		};
	}, [map, children, onClick, position, className]);

	return null;
};

const leafletButton = css`
	.leaflet-button {
		background: red;
		border: 0;
	}
`;
const leafletButtonStyles = <Global styles={leafletButton} />;

const Map = () => {
	const locateMe = useCallback(map => {
		map.locate();
	}, []);
	return (
		<>
			{leafletButtonStyles}
			<StyledMapContainer
				watch
				enableHighAccuracy
				zoomControl
				center={{ lat: 51.220915, lng: 10.357579 }}
				zoom={[6]}
				scrollWheelZoom={false}
			>
				<TileLayer
					url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFrbDg5IiwiYSI6ImNrejg4NHY3azA2djcybm8xdmx4M2xpdHcifQ.ftANL_cw0hp3m_NUP-CeoQ"
					zoomControl={false}
				/>
				<LeafletButton position="bottomright" className="leaflet-button" onClick={locateMe}>
					Locate me
				</LeafletButton>
				<Location />
			</StyledMapContainer>
		</>
	);
};

export default Map;
