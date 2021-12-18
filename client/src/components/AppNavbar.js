import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
} from "reactstrap";

const AppNavbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleHandler = () => {
		setIsOpen((prevState) => {
			return !prevState;
		});
	};

	return (
		<div>
			<Navbar color="dark" dark expand="sm" className="mb-5">
				<Container>
					<NavbarBrand href="/">ShoppingList</NavbarBrand>
					<NavbarToggler onClick={toggleHandler} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="https://github.com/DamiGbot">Github</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default AppNavbar;
