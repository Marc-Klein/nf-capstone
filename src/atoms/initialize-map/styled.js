import styled from "@emotion/styled";
import { MapContainer } from "react-leaflet";

const StyledMapContainer = styled(MapContainer)`
	position: relative;
	width: 100%;
	//substrates the height of the appbar and bottombar from 100vh
	height: calc(100vh - 112px);
	margin: 0;
	padding: 0;
`;

export default StyledMapContainer;
