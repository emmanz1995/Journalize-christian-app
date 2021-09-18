import React from 'react';
import styled from "styled-components";

const StyledButton = styled.input`
  width: 100%;
  padding: 7px;
  border: 2px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
`;

const MainButton = ({ type, value }) => {
    return (
        <StyledButton type={type} value={value} />
    )
}

export default MainButton;
