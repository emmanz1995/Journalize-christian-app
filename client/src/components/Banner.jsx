import React, { useState } from 'react';
import styled from 'styled-components';
import { AuthService } from '../service/AuthService';

const BannerContainer = styled.main`
  height: 170px;
  width: 100%;
  background-color: ${props => props.theme.DarkGrayLight};
  border-top: 2px solid #333;
  margin: 79px 0 20px 0;
  .banner-wrapper {
    max-width: 1100px;
    margin: 5px auto;
  }
  .banner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    //align-items: center;
  }
  .img-container {
    width: 100px;
    height: 100px;
  }
  .profile-pic {
    width: 100%;
    height: auto;
  }
`;

const Nav = styled.nav`
  width: 500px;
  height: 40px;
  border-radius: 4px;
  border: 2px solid #ddd;
  background-color: #fff;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 9px 7px;
    width: 400px;
    a {
      text-decoration: none;
      &:hover {
        color: #333;
        transition: all 0.2s ease-in-out;
      }
    }
  }
`

function Banner() {
    const [currentUser, setCurrentUser] = useState(AuthService.getUserInfo)
    return (
        <BannerContainer>
            <div className="banner-wrapper">
                <div className="banner">
                    <h1>Welcome back {currentUser?.sub}</h1>
                    <div className="img-container">
                        <img src={currentUser?.image} alt={currentUser?.sub} className="profile-pic" width="600" height="400" />
                    </div>
                </div>
                <Nav className="mini-nav">
                    <ul>
                        <li><a href="">Submit Prayer Request</a></li>
                        <li><a href="">Delete all</a></li>
                        <li><a href="">Testimony feed</a></li>
                    </ul>
                </Nav>
            </div>
        </BannerContainer>
    );
}

export default Banner;
