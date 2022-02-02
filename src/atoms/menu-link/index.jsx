import Link from "next/link";
import styled from "@emotion/styled";

// This creates a custom component that wraps an <a> tag
const RedLink = styled.a`
	color: red;
`;

const MenuLink = ({ href, name }) => {
	// Must add passHref to Link
	return (
		<Link passHref href={href}>
			<RedLink>{name}</RedLink>
		</Link>
	);
};

export default MenuLink;
