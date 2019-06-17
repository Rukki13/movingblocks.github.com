import React, { useState } from "react";
import { IconContext } from "react-icons";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FaDownload } from "react-icons/fa";

export default () => {
  const [isOpen, toggle] = useState(false);
  return (
    <Navbar light expand="md" sticky="top">
      <Container>
        <NavbarBrand href="/">Terasology</NavbarBrand>
        <NavbarToggler onClick={() => toggle(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/media">Media</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/game">The Game</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://forum.terasology.org/">Forum</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Modules
              </DropdownToggle>
              <DropdownMenu className="slideIn animate" right>
                <DropdownItem>
                  <NavLink href="/modules">All</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/modules/gameplay-template">
                    Gameplay Template
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/modules/logic">Logic</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/modules/content">Content</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                className="btn btn-primary btn-download"
                href="/download"
              >
                <IconContext.Provider
                  value={{ size: "1em", className: "download" }}
                >
                  <FaDownload />
                </IconContext.Provider>
                Download
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};