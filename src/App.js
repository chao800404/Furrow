/** @format */

import Header from "./components/header/header.component";
import Homepage from "./page/homepage/hompage.component";
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
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
