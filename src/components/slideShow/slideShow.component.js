/** @format */

import {
  SlideContainer,
  SlideImg,
  SlideImgContainer,
} from "./slideShow.styles";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const btnStyle = (direction, hovered) => {
  return {
    fontSize: "4rem",
    top: "50%",
    position: "absolute",
    left: `${direction ? "" : "0"}`,
    right: `${direction ? "0" : ""}`,
    transform: `translate(${direction ? "50%,-50%" : "-50%,-50%"})`,
    opacity: `${hovered ? 1 : 0}`,
    transition: "all .5s ease-in-out",
    width: "5rem",
    zIndex: 30,
  };
};

const SlideShow = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, src.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <SlideContainer
      onMouseEnter={() => setHovered((prevHovered) => !prevHovered)}
      onMouseLeave={() => setHovered((prevHovered) => !prevHovered)}
    >
      <div
        style={btnStyle(1, hovered)}
        data-type="rightBtn"
        onClick={() => paginate(1)}
      >
        <BsFillArrowRightSquareFill />
      </div>
      <div
        style={btnStyle(0, hovered)}
        data-type="leftBtn"
        onClick={() => paginate(-1)}
      >
        <BsFillArrowLeftSquareFill />
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <SlideImgContainer>
          <SlideImg
            alt={alt}
            key={page}
            src={src[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </SlideImgContainer>
      </AnimatePresence>
    </SlideContainer>
  );
};

export default SlideShow;
