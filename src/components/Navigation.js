import React, { useState } from 'react';
import logo from './home/logo.png';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const logo_styles = {
        width :'200px',

    }
    const navItemsStyle = {
        padding: '10px',
        textDecoration: 'none',
    }
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavLink href="/" to="/">
                    <img src={logo} style={logo_styles} alt=""/>
                </NavLink>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>

                        <NavItem>
                            <NavLink style={navItemsStyle} href="contact" to="/Contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navItemsStyle} href="about" to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={navItemsStyle} href="service" to="/dervice">Service</NavLink>
                        </NavItem>
                    </Nav>
                    {/*<NavbarText>Simple Text</NavbarText>*/}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
// import React, {useState} from 'react';
// import css from './navbar.modul.css';
// // import logo from './logo.png'
// import logo from './home/logo.png';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText
//
// } from 'reactstrap';

// import { NavLink } from 'react-router-dom';
// const Example = (props) => {
//     const [isOpen, setIsOpen] = useState(false);
//
//     const toggle = () => setIsOpen(!isOpen);
// const navstyle={
//     color: '#323233',
//
// }
// const logo_styles = {
//     width :'200px',
// }
// const headerleftbar = {
//         backgroundColor: '#174a88'
//
//     }
//     return (
//         <div>
//             <Navbar color="light" light expand="md">
//                 <NavbarBrand  href="/" style={headerleftbar}>
//                     <img src={logo} style={logo_styles} alt=""/>
//
//                 </NavbarBrand>
//                 <NavbarToggler onClick={toggle} />
//                 <Collapse isOpen={isOpen} navbar>
//                     <Nav className="ml-auto pr-5" navbar>
//                         <NavItem>
//
//                             <NavLink style={navstyle} className='menuItems' to="/Product">
//                                 <div className='myIconStyle'>
//                                     <i className="fas fa-store"></i>
//                                     <p>Product</p>
//                                 </div>
//                                 </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink style={navstyle} to="/Contact">
//                                  <div className='myIconStyle'>
//                                     <i className="fas fa-phone-alt"></i>
//                                      <p>Contact</p>
//                                 </div>
//
//                             </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink style={navstyle} to="/About">
//                                  <div className='myIconStyle'>
//                                     <i className="fas fa-id-card"></i>
//                                      <p>About</p>
//                                 </div>
//                                 </NavLink>
//                         </NavItem>
//                         <NavItem>
//
//                         </NavItem>
//
//                     </Nav>
//                     <NavbarText></NavbarText>
//                 </Collapse>
//             </Navbar>
//         </div>
//     );
// }
//
//
// export default Example;