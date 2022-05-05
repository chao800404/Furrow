/** @format */

import dmb from "../../assets/firmLogo/dmb-logo.svg";
import harley from "../../assets/firmLogo/harley-logo.svg";
import mclaren from "../../assets/firmLogo/mclaren-logo.svg";
import peng from "../../assets/firmLogo/peng-logo.svg";
import rayban from "../../assets/firmLogo/rayban-logo.svg";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

const FirmLogoContent = () => {
  return (
    <motion.div
      initial={{ x: 0, width: "auto", display: "flex", align: "center" }}
      animate={{ x: "-100%" }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: [0, 0, 0, 0],
      }}
    >
      {[dmb, harley, mclaren, peng, rayban].map((logo, index) => (
        <ReactSVG
          key={index}
          style={{
            padding: "2rem",
          }}
          beforeInjection={(svg) =>
            svg.setAttribute(
              "style",
              "width:16rem; height:5rem; display:flex ; align-items:center; justify-content:center;"
            )
          }
          src={logo}
        />
      ))}
    </motion.div>
  );
};

export default FirmLogoContent;
