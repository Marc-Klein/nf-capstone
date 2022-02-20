import styled from "@emotion/styled";
import { MapContainer } from "react-leaflet";

//substrates the height of the appbar and bottom bar from 100vh
const StyledMapContainer = styled(MapContainer)`
	position: relative;
	width: 100%;
	height: calc(100vh - 112px);
	margin: 0;
	padding: 0;
`;

export default StyledMapContainer;
