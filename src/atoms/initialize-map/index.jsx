import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import StyledMapContainer from "./styled.js";
import Location from "../get-position";
import React, { useCallback, useEffect } from "react";
import { useMap, TileLayer } from "react-leaflet";
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
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background: white;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z' /%3E%3C/svg%3E");
		box-shadow: 5px 5px 3px -2px #000;
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
					&nbsp;
				</LeafletButton>
				<Location />
			</StyledMapContainer>
		</>
	);
};

export default Map;
