import Link from "next/link";
import styled from "@emotion/styled";

// This creates a custom component that wraps an <a> tag
const RedLink = styled.a`
	color: red;
`;

const MenuLink = ({ href, children }) => {
	// Must add passHref to Link and before href because its a shorthand
	return (
		// eslint-disable-next-line react/react-in-jsx-scope
		<Link passHref href={href}>
			{/* eslint-disable-next-line react/react-in-jsx-scope */}
			<RedLink>{children}</RedLink>
		</Link>
	);
};

export default MenuLink;
