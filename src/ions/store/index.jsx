import create from "zustand";
import produce from "immer";

const useStore = create(set => ({
	// position: {
	// 	latitude: null,
	// 	longitude: null,
	// 	accuracy: null,
	// },

	latitude: [],
	setLatitude: () => {
		set(
			produce(state => {
				state.navigator.geolocation.getCurrentPosition((...args) => {
					args[0].coords.latitude;
				});
			})
		);
	},

	longitude: [],
	setLongitude: () => {
		set(
			produce(state => {
				state.navigator.geolocation.getCurrentPosition((...args) => {
					args[0].coords.longitude;
				});
			})
		);
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
