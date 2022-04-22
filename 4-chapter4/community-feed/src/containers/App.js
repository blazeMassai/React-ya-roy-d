import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header/Header';
import Feed from './Feed';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Question from "./Question";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
   text-decoration:none;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />

         <Router>
             <Routes>
              <Route exact path="/" element={<Feed/>} />
              <Route exact path="/questions" element={<Feed/>} />
              <Route exact path="/questions/:id" element={<Question />} />
             </Routes>
         </Router>
        </AppWrapper>
      </>
    );
  }
}

export default App;
