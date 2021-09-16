import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.main`
  height: 350px;
  width: 100%;
  background-color: ${props => props.theme.DarkGrayLight};
  .banner-wrapper {
    max-width: 1100px;
    margin: 0 auto;
  }
`;

function Banner() {
    return (
        <BannerContainer>
            <div className="banner-wrapper"></div>
        </BannerContainer>
    );
}

export default Banner;
