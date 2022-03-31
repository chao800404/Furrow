/** @format */
import React from "react";
import {
  NavBarCollapsed,
  NavBarContainer,
  NavBarIcon,
  NavList,
} from "./navBarItem.styles";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import {
  actionTargetNav,
  actionToggleNav,
} from "../../redux/article/article.action";
import primaryColor from "../../theme/priamry.styles";

const variants = {
  display: {
    height: 200,
    visibility: "visible",
  },
  hidden: {
    height: 0,
    visibility: "hidden",
  },
};

const NavBarItem = ({ name, data, toggle }) => {
  const dispatch = useDispatch();

  const handleClickFilterArticle = (e) => {
    const navTarget = e.target.dataset.nav;
    dispatch(actionTargetNav(navTarget));
  };

  const handleClickCollapsed = (e) => {
    const navTitle = e.target.dataset.name;
    dispatch(actionToggleNav(navTitle));
  };

  return (
    <NavBarContainer>
      <h2
        data-name={name}
        onClick={handleClickCollapsed}
        style={{ color: `${toggle ? primaryColor.cursorColor : "inherit"}` }}
      >
        {name}

        <NavBarIcon animate={toggle ? { rotate: 0 } : { rotate: 90 }}>
          <BsFillCaretDownFill />
        </NavBarIcon>
      </h2>

      <NavBarCollapsed
        data-name={name}
        variants={variants}
        initial="hidden"
        animate={toggle ? "display" : "hidden"}
      >
        {data.map(({ title, id }) => (
          <NavList
            onClick={handleClickFilterArticle}
            whileHover={{ color: primaryColor.titleColor }}
            data-nav={id}
            key={id}
          >
            {title}
          </NavList>
        ))}
      </NavBarCollapsed>
    </NavBarContainer>
  );
};

export default React.memo(NavBarItem);
