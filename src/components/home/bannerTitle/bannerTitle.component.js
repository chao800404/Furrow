/** @format */

import { Title } from "./bannerTitle.style";
import { useSelector } from "react-redux";
import { selectBannerDrawing } from "../../../redux/banner/banner.select";
import maxWidth from "../../../config/screen.size";
import { useEffect, useState } from "react";

const title = "SmartWear";

const BannerTitle = () => {
  const drawn = useSelector(selectBannerDrawing) || false;
  const [checkScreen, setCheckScreen] = useState(false);
  useEffect(() => {
    const checkSize = window.innerWidth <= maxWidth.small.replace("px", "");

    setCheckScreen((prev) => (prev = checkSize));
  }, []);

  console.log(checkScreen);

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
    smallScreen: {
      visibility: "visible",
      opacity: 1,
    },
  };

  return drawn || checkScreen ? (
    <Title
      variants={variants}
      animate={drawn || checkScreen ? "visible" : "hidden"}
      intial={checkScreen ? "smallScreen" : "hidden"}
    >
      <span>{title.slice(0, 5).toUpperCase()}</span>
      <span>{title.slice(5, 10).toUpperCase()}</span>
    </Title>
  ) : null;
};

export default BannerTitle;
