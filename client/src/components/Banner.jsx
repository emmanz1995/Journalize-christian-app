import React, { useState } from 'react';
import styled from 'styled-components';
import { AuthService } from '../service/AuthService';

const BannerContainer = styled.main`
  height: 220px;
  width: 100%;
  // background-color: ${props => props.theme.DarkGrayLight};
  background-color: #fafafa;
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
    align-items: center;
  }
  .banner-info {
    display: flex;
    justify-content: space-between;
    width: 450px;
    align-items: center;
  }
  .img-container {
    width: 100px;
    height: 100px;
  }
  .profile-pic {
    width: 100%;
    height: auto;
    border: solid 2px #ddd;
    border-radius: 50%;
  }
  .btn-edit {
    padding: 7px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    cursor: pointer;
    background-color: #fff;
    width: 65px;
    &:hover {
      background-color: #ddd;
      transition: all 0.2s ease-in-out;
    }
  }
  .username-text {
    color: #4D4D4D;
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #fff;
  margin: 20px 0 0 0;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 9px 7px;
    width: 350px;
    a {
      text-decoration: none;
      color: #4D4D4D;
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
                    <div className="banner-info">
                        <div className="img-container">
                            <img src={currentUser?.image} alt={currentUser?.sub} className="profile-pic" width="600" height="400" />
                        </div>
                        <div className="username-text">
                            <h1>{currentUser?.fullName}</h1>
                            <h4>{currentUser?.sub}</h4>
                        </div>
                    </div>
                    <button className="btn-edit">Edit</button>
                </div>
                <Nav className="mini-nav">
                    <ul>
                        <li><a href="">Add Prayer</a></li>
                        <li><a href="">Delete all</a></li>
                        <li><a href="">Testimony feed</a></li>
                    </ul>
                </Nav>
            </div>
        </BannerContainer>
    );
}

export default Banner;
