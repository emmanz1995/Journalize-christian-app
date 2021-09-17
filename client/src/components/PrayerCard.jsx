import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.main`
  width: 250px;
  border-radius: 4px;
  box-shadow: 0 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  margin: 15px 0;
  background-color: ${props => props.theme.MainColor};
`;
const CardHeading = styled.div`
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn-trash {
    border-radius: 4px;
    border: 2px solid #ddd;
    padding: 7px;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
      transition: all 0.2s ease-in-out;
    }
  }
  .fa-trash {
    cursor: pointer;
  }
`;
const CardBody = styled.div`
  margin: 15px;
`;

const PrayerCard = ({ _id, title, body }) => {
    return (
        <CardContainer>
            <CardHeading>
                {title}
                <i className="fas fa-trash" />
            </CardHeading><hr />
            <CardBody>{body}</CardBody>
        </CardContainer>
    );
}

export default PrayerCard;
