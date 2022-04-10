import React from 'react';
import styled from 'styled-components';

const OwnerWrapper = styled.div`
  display: flex;
  flex-basis: 40%;
  align-items: center;
  justify-content: flex-end;
`;

const Avatar = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const Name = styled.h3`
  margin-left: 5%;
`;
const Lactivity = styled.h4 `
    margin-left: 5%;
`

const Owner = ({ data }) => (
  <OwnerWrapper>
    <Avatar src={data.profile_image} />
    <Name>{data.display_name}</Name>
    <Lactivity>Reputation: {data.reputation}</Lactivity>
  </OwnerWrapper>
);

export default Owner;
