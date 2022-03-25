/** @format */

import { Title } from "./bannerTitle.style";
import { useSelector } from "react-redux";

const title = "A breakthrough innovation glasses lenses";

const BannerTitle = () => {
  const drawn = useSelector(({ banner: { drawing } }) => drawing) || false;

  console.log(drawn);
  const variants = {
    visible: {
      opacity: 1,
      bottom: 150,
      visibility: "visible",
    },
    hidden: {
      opacity: 0,
      bottom: 0,

      visibility: "hidden",
    },
  };

  return (
    <Title
      variants={variants}
      animate={drawn ? "visible" : "hidden"}
      intial="hidden"
    >
      {title}
    </Title>
  );
};

export default BannerTitle;
