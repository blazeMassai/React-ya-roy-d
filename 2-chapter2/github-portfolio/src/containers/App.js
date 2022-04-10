import React from 'react';
import logo from '../logo.svg';
// import './App.css';
import Profile from "./Profile";
import Header from "../components/Header/Header";
import styled, { createGlobalStyle } from 'styled-components';

const AppWrapper = styled.div`
    text-align: center;
`
const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

`

function App() {
  return (
      <>
          <GlobalStyle />
                <AppWrapper>
                  <Header logo={logo}  />
                  <Profile />
                </AppWrapper>
      </>
  );
}

export default App;
