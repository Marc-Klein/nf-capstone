import create from "zustand";

const useStore = create(set => ({
	currentPosition: null,
	setCurrentPosition: () => {
		navigator.geolocation.getCurrentPosition(currentPosition => {
			set(() => ({
				currentPosition,
			}));
		});
	},
}));

export default useStore;

// setCurrentPosition: () => {
// 	navigator.geolocation.getCurrentPosition(currentPosition => {
// 		set(
// 			produce(state => {
// 				state.currentPosition = currentPosition;
// 			})
// 		);
// 	});
// },
