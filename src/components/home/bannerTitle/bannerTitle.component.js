/** @format */

import { Title } from "./bannerTitle.style";
import { useSelector } from "react-redux";
import { selectBannerDrawing } from "../../../redux/banner/banner.select";

const title = "SmartWear";

const BannerTitle = () => {
  const drawn = useSelector(selectBannerDrawing) || false;

  const variants = {
    visible: {
      opacity: 1,
      bottom: "-10%",
      visibility: "visible",
      zIndex: 30,
    },
    hidden: {
      visibility: "hidden",
    },
  };

  return drawn ? (
    <Title
      variants={variants}
      animate={drawn ? "visible" : "hidden"}
      intial="hidden"
    >
      <span>{title.slice(0, 5).toUpperCase()}</span>
      <span>{title.slice(5, 10).toUpperCase()}</span>
    </Title>
  ) : null;
};

export default BannerTitle;
