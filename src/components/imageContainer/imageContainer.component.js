/** @format */
import { ImgContainer } from "./imageContainer.style";
import { useDispatch } from "react-redux";
import { checkImageLoad } from "../../redux/card/card.action";

const ImageContainer = ({
  props: { title, imageUrl, hovered = 1 },
  className,
}) => {
  const dispatch = useDispatch();
  return (
    <ImgContainer className={className}>
      <img
        alt={title}
        src={imageUrl[hovered ? "dark" : "light"]}
        onLoad={() => dispatch(checkImageLoad())}
      />
    </ImgContainer>
  );
};

export default ImageContainer;
