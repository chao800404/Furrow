/** @format */

import Header from "./components/header/header.component";
import HomePage from "./components/home/home.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
