/** @format */
import { ImgContainer } from "./imageContainer.style";
import PreLoadImage from "../preLoadImage/preLoadImage.component";

const ImageContainer = ({
  props: { title, image, hovered = 1 },
  className,
}) => {
  const curImage = image[hovered ? "dark" : "light"];
  return (
    <ImgContainer className={className}>
      <PreLoadImage text={title} url={curImage} />
    </ImgContainer>
  );
};

export default ImageContainer;
