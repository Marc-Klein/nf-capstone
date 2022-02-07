import styled from "@emotion/styled";
import { MapContainer } from "react-leaflet";

const StyledMapContainer = styled(MapContainer)`
	position: relative;
	width: 100%;
	height: calc(100vh - 56px);
	margin: 0;
	padding: 0;
`;

export default StyledMapContainer;
