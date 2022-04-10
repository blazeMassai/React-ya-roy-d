import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #154360;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  
  @media (max-width: 768px) {
    font-size: calc(7px + 2vmin);
  }
`;

const Title = styled.h1`
  height: 64px;
  pointer-events: none;
`;

const Header = () => (
  <HeaderWrapper>
    <Title>Project Management Board</Title>
  </HeaderWrapper>
);

export default Header;
