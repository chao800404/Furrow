/** @format */

import { NavBarContainer } from "./navBar.styles";
import NavBarItem from "../navBarItem/navBarItem.component";
import { useSelector } from "react-redux";
import { selectSideArticle } from "../../redux/article/article.select";

const NavBar = () => {
  const articleListData = useSelector(selectSideArticle);

  return (
    <NavBarContainer>
      {articleListData.map(({ id, ...otherPops }) => (
        <NavBarItem key={id} {...otherPops} />
      ))}
    </NavBarContainer>
  );
};

export default NavBar;
