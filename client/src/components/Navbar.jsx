import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  padding: 5px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.DarkGrayLight};
`

const NavbarWrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: ${props => props.theme.MainColor};
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    a {
      text-decoration: none;
      color: ${props => props.theme.MainColor};
    }
  }
`;

function Navbar() {
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <h2>Journalize</h2>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Register</a></li>
                </ul>
            </NavbarWrapper>
        </NavbarContainer>
    );
}

export default Navbar;
