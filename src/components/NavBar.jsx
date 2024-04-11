 
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
function NavBar () {
    return (
        <>
            <Nav>
                <NavMenu>
                    <li>
                        <NavLink to="/" activeStyle>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project" activeStyle>
                            Projects
                        </NavLink>
                    </li>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default NavBar