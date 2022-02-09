import create from "zustand";
import produce from "immer";

const useStore = create(set => ({
	currentPosition: null,
	setCurrentPosition: () => {
		navigator.geolocation.getCurrentPosition(currentPosition => {
			set(
				produce(state => {
					state.currentPosition = currentPosition;
				})
			);
		});
	},

	setCurrentPositionOhneImmer: () => {
		navigator.geolocation.getCurrentPosition(currentPosition => {
			set(() => ({
				currentPosition,
			}));
		});
	},
}));

export default useStore;

// 		position: [],
//
// 		addLatitude: latitude => {
// 			set(
// 				produce(state => {
// 					state.navigator.geolocation.getCurrentPosition((...args) => {
// 						args[0].coords.latitude;
// 					});
// 				})
// 			);
// 		},
//
// 		addLongitude: args => {
// 			set(
// 				produce(state => {
// 					state.navigator.geolocation.getCurrentPosition((...args) => {
// 						args[0].coords.longitude;
// 					});
// 				})
// 			);
// 		},
//
// 		watchPosition: (success, error) => {
// 			set(
// 				produce(state => {
// 					state.navigator.geolocation.watchPosition(success, error);
// 				})
// 			);
// 		},
// 	};
// });
// export default useStore;
