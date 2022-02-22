import copyToClipboard from "copy-to-clipboard";
import { useCallback } from "react";

//used for copying the link to the users clipboard
const useCopyToClipboard = () => {
	const copy = useCallback(value => {
		copyToClipboard(value);
	}, []);

	return { copy };
};

export default useCopyToClipboard;
