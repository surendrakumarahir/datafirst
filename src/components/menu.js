import React from "react";
import Nav from "react-bootstrap/Nav";

const Menu = () => {

	return (
		<Nav className="menu-custom" activeKey="/home">
			<Nav.Item>
				<Nav.Link href="/home">English</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-1">Nav1</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-2">Nav2</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};


export default Menu;