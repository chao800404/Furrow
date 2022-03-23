/** @format */

import Header from "./components/header/header.component";
import HomePage from "./components/home/home.component";
import CurstomCursor from "./components/curstomCursor/curstomCursor.component";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.main`
  overflow: hidden;
  position: relative;
`;

const App = () => {
  return (
    <AppContainer>
      <CurstomCursor />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
