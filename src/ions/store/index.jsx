import create from "zustand";
import { persist } from "zustand/middleware";
import produce from "immer";

const useStore = create(
	persist(set => {
		return {
			position: [],
			addLatitude: latitude => {
				set(
					produce(state => {
						state.navigator.geolocation.getCurrentPosition(latitude);
					})
				);
			},
			addLongitude: longitude => {
				set(
					produce(state => {
						state.navigator.geolocation.getCurrentPosition(longitude);
					})
				);
			},
		};
	})
);
export default useStore;
