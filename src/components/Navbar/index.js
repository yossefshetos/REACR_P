import React from 'react';
import {NavbarSection, Logo, LogoText, UlList, ListItem, Anchor, LinkAnchor} from './style.js';

const Navbar = () => {
  return(
      <NavbarSection>
          
          <div className="container">
              
              <Logo>
                  <LogoText>Ultra Profile</LogoText>
              </Logo>
              
              <UlList className="ul-list">
                  <ListItem><LinkAnchor exact="true" to="/">Home</LinkAnchor></ListItem>
                  <ListItem><Anchor href="#">Work</Anchor></ListItem>
                  <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                  <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                  <ListItem><Anchor href="#">About</Anchor></ListItem>
                  <ListItem><LinkAnchor to="/contact">Contact</LinkAnchor></ListItem>
              </UlList>

          </div>

      </NavbarSection>
  )
}

export default Navbar;