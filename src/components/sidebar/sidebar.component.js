/** @format */

import sidebarData from "./sidebar.data.js";
import { SidebarContainer, Sidebar, SidebarImage } from "./sidebar.styles";
import SidebarItemLi from "../siderbar-item/sidebar-item.component.js";
import { sidebarStauts } from "../../redux/sidebar/sidebar.select";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

const sidebarImage = async (index) => {
  if (index) {
    const image = import(`../../assets/homePhoto/homePhoto__${index}.webp`);
    if (image) return image;
  }

  return import(`../../assets/homePhoto/homePhoto__aboutus.webp`);
};

const Sidebars = () => {
  const status = useSelector(sidebarStauts);
  const [imageUrl, setImageUrl] = useState();
  const [imageName, setImageName] = useState("aboutus");

  useEffect(() => {
    if (imageName)
      sidebarImage(imageName)
        .then((data) => data.default)
        .then((path) => setImageUrl(path));
  }, [imageName]);

  const handleMouseEnter = (e) => {
    const target = e.target.closest("a");
    if (!target) return;
    const image = target.dataset.target;
    setImageName(image.split(" ").join(""));
  };

  return status ? (
    <SidebarContainer
      initial={{ scaleX: 0.2, transformOrigin: "left" }}
      animate={{ scaleX: 1 }}
      onMouseOver={handleMouseEnter}
    >
      <Tilt
        perspective={400}
        tiltAngleYInitial={10}
        tiltAngleXInitial={10}
        style={{
          zIndex: 50,
          gridColumn: "1 / 2",
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        <SidebarImage>
          <img alt={imageName} src={imageUrl} />
        </SidebarImage>
      </Tilt>
      <Sidebar>
        {sidebarData.map(({ id, ...otherSidebarProps }, index) => (
          <SidebarItemLi key={id} index={index} {...otherSidebarProps} />
        ))}
      </Sidebar>
    </SidebarContainer>
  ) : null;
};
export default Sidebars;
