/** @format */
import {
  HomeArticleSide,
  HomeArticleDownContainer,
} from "./homeArticle-item.styles";
import NavBar from "../../navBar/navBar.component";
import { ReactSVG } from "react-svg";
import { useSelector } from "react-redux";
import { selectNavBarArticle } from "../../../redux/article/article.select";
import { selectThemeStyle } from "../../../redux/theme/theme.select";

import uvSvgIcon from "../../../assets/svg/UV.svg";
import waterProofIcon from "../../../assets/svg/water_proof.svg";
import coldProtectionIcon from "../../../assets/svg/cold_protection.svg";
import dustProofIcon from "../../../assets/svg/dust_proof.svg";
import React from "react";

const svgIconStyle = (color) => ({
  fill: color,
  width: "10rem",
  height: "10rem",
  fontSize: "5rem",
});

const HomeArticleIconContainer = React.memo(({ theme }) => (
  <HomeArticleDownContainer>
    <ReactSVG style={svgIconStyle(theme.color)} src={uvSvgIcon} />
    <ReactSVG style={svgIconStyle(theme.color)} src={waterProofIcon} />
    <ReactSVG style={svgIconStyle(theme.color)} src={coldProtectionIcon} />
    <ReactSVG style={svgIconStyle(theme.color)} src={dustProofIcon} />
  </HomeArticleDownContainer>
));

const HomeArticleItem = () => {
  const { id, title, subheading, content } = useSelector(selectNavBarArticle);
  const theme = useSelector(selectThemeStyle);
  return (
    <>
      <HomeArticleSide id={id}>
        <div>
          <h2>{title}</h2>
          <h3>{subheading}</h3>
          <p>{content}</p>
        </div>
        <HomeArticleIconContainer theme={theme} />
      </HomeArticleSide>
      <NavBar />
    </>
  );
};

export default HomeArticleItem;
