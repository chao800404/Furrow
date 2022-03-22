/** @format */

import { Button } from "../themeBtn.styles";
import { useDispatch } from "react-redux";
import { toggleThemeStyle } from "../../redux/theme/theme.actions";
import { HomeContainer } from "./home.styles";

const HomePage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleThemeStyle());
  };

  return (
    <HomeContainer>
      <h1>Hello world</h1>
      <Button onClick={handleClick}>Toggle Theme</Button>
    </HomeContainer>
  );
};

export default HomePage;
