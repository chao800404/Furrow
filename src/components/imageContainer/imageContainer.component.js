/** @format */
import { ImgContainer } from "./imageContainer.style";
import PreLoadImage from "../preLoadImage/preLoadImage.component";

const ImageContainer = ({
  props: { title, imageUrl, hovered = 1 },
  className,
}) => {
  return (
    <ImgContainer className={className}>
      <PreLoadImage text={title} url={imageUrl[hovered ? "dark" : "light"]} />
    </ImgContainer>
  );
};

export default ImageContainer;
