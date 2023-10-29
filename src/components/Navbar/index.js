import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/publication" activeStyle>
                        Publications
                    </NavLink>
                    {/* <NavLink to="/education" activeStyle>
                        Education
                    </NavLink>
                    <NavLink to="/experience" activeStyle>
                        Experiences
                    </NavLink>
                    <NavLink to="/teaching" activeStyle>
                        Teaching
                    </NavLink>
                    <NavLink to="/accomplishments" activeStyle>
                        Accomplishments
                    </NavLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;