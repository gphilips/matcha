import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/header.css';

export default class Header extends React.Component {
    render() {
        return (
        <Navbar collapseOnSelect fixedTop>
    		<Navbar.Header>
    			<Navbar.Brand>
    				<a href="/">Matcha</a>
    			</Navbar.Brand>
    			<Navbar.Toggle />
    		</Navbar.Header>
    		<Navbar.Collapse className="text-center">
    			<Nav pullRight>
    				<NavItem eventKey={1} href="/signin">
    					Sign In
    				</NavItem>
    				<NavItem eventKey={2} href="/register">
    					Register
    				</NavItem>
    			</Nav>
    		</Navbar.Collapse>
    	</Navbar>

        );
    }
}
