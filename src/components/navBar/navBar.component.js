/** @format */

import { NavBarContainer } from "./navBar.styles";
import NavBarItem from "../navBarItem/navBarItem.component";
import { useSelector, useDispatch } from "react-redux";
import { selectSideArticle } from "../../redux/article/article.select";
import { toggleCursorStyle } from "../../redux/cursor/cursor.actions";

const NavBar = () => {
  const articleListData = useSelector(selectSideArticle);

  const dispatch = useDispatch();

  const handleHover = () => {
    dispatch(toggleCursorStyle());
  };

  return (
    <NavBarContainer onMouseEnter={handleHover} onMouseLeave={handleHover}>
      {articleListData.map(({ id, ...otherPops }) => (
        <NavBarItem key={id} {...otherPops} />
      ))}
    </NavBarContainer>
  );
};

export default NavBar;
