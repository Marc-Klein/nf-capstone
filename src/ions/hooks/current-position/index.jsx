import { useState } from "react";
import { useMapEvents } from "react-leaflet";

//note that you've to use this hook on your map
const useCurrentLocation = () => {
	const [position, setPosition] = useState(null);
	const map = useMapEvents({
		locationfound(event) {
			setPosition(event.latlng);
			map.flyTo(event.latlng, [16]);
		},
	});
	return position;
};

export default useCurrentLocation;
