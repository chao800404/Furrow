/** @format */
import {
  HomeArticleSide,
  HomeArticleDownContainer,
} from "./homeArticle-item.styles";
import NavBar from "../../navBar/navBar.component";
import { ReactSVG } from "react-svg";
import { useSelector } from "react-redux";
import { selectNavBarArticle } from "../../../redux/article/article.select";
import uvSvgIcon from "../../../assets/svg/UV.svg";
import waterProofIcon from "../../../assets/svg/water_proof.svg";
import coldProtectionIcon from "../../../assets/svg/cold_protection.svg";
import dustProofIcon from "../../../assets/svg/dust_proof.svg";

const HomeArticleItem = () => {
  const { id, title, subheading, content } = useSelector(selectNavBarArticle);

  return (
    <>
      <HomeArticleSide id={id}>
        <div>
          <h2>{title}</h2>
          <h3>{subheading}</h3>
          <p>{content}</p>
        </div>
        <HomeArticleDownContainer>
          <ReactSVG className="svgIcon" src={uvSvgIcon} />
          <ReactSVG className="svgIcon" src={waterProofIcon} />
          <ReactSVG className="svgIcon" src={coldProtectionIcon} />
          <ReactSVG className="svgIcon" src={dustProofIcon} />
        </HomeArticleDownContainer>
      </HomeArticleSide>
      <NavBar />
    </>
  );
};

export default HomeArticleItem;
