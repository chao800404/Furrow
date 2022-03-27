/** @format */

import { SidebarItem, SidebarLi } from "./sidebar-item.style";
import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

const SidebarItemLi = ({ link, name, index }) => {
  const [isHover, setIsHover] = useState(false);

  const variants = {
    rest: {
      x: 0,
      transition: {
        duration: `${(index + 1) * 0.2}`,
        ease: [0.17, 0.67, 0.8, 1.1],
      },
    },

    hover: {
      x: -50,
      ease: [0.17, 0.67, 0.83, 0.67],
      transition: { ease: [0.17, 0.67, 0.83, 0.67] },
    },

    initial: {
      x: 500,
      delay: 500,
    },
  };

  return (
    <SidebarLi
      initial="initial"
      variants={variants}
      animate={isHover ? "hover" : "rest"}
    >
      <SidebarItem
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        to={link}
      >
        {isHover ? <AiFillCaretRight style={{ fontSize: "5rem" }} /> : null}
        {name.toUpperCase()}
      </SidebarItem>
    </SidebarLi>
  );
};

export default SidebarItemLi;
