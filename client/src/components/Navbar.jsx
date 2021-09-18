import React from 'react';
import styled from 'styled-components';
import { AuthService } from '../service/AuthService';
import { useHistory } from 'react-router-dom';

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
    let history = useHistory()
    const user = AuthService.getUserInfo();
    const handleLogout = (evt) => {
        evt.preventDefault();
        AuthService.onLogout();
        history.push('/');
    }
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <h2>Journalize</h2>
                <ul>
                    {user ? <li><a href="/">{user?.sub}</a></li> : <li><a href="/register">Register</a></li>}
                    {user ? (
                        <li><a href="" onClick={handleLogout}>Logout</a></li>
                    ) : (
                        <li><a href="/">Login</a></li>
                    )}
                </ul>
            </NavbarWrapper>
        </NavbarContainer>
    );
}

export default Navbar;
