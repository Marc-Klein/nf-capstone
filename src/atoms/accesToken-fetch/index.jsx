const getAccessToken = async () => {
	const res = await fetch(
		`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
	);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};

export default getAccessToken;
