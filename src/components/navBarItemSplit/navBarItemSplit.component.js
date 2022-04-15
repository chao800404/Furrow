/** @format */

import { NavList } from "./navBarItemSplit.styles";
import { actionTargetNav } from "../../redux/article/article.action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import primaryColor from "../../theme/priamry.styles";
import { selectThemeStyle } from "../../redux/theme/theme.select";

const NavBarItemSplit = ({ title, id }) => {
  const [isHovered, setHovered] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector(selectThemeStyle);

  const handleClickFilterArticle = (e) => {
    const navTarget = e.target.dataset.nav;
    dispatch(actionTargetNav(navTarget));
  };

  return (
    <NavList
      onClick={handleClickFilterArticle}
      animate={
        isHovered ? { color: primaryColor.cursorColor } : { color: theme.color }
      }
      data-nav={id}
      key={id}
      onMouseEnter={() => setHovered((prev) => !prev)}
      onMouseLeave={() => setHovered((prev) => !prev)}
    >
      {title}
    </NavList>
  );
};

export default NavBarItemSplit;
