/** @format */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LinkBtnContainer } from "./linkButton.styles";
import { useSelector } from "react-redux";
import { selectThemeStyle } from "../../redux/theme/theme.select";
import primaryColor from "../../theme/priamry.styles";

const LinkBtn = ({ children, link, collectionId }) => {
  const navigate = useNavigate();
  const theme = useSelector(selectThemeStyle);
  const [active, setActive] = useState(collectionId === link);

  useEffect(() => setActive(collectionId === link), [collectionId, link]);

  const handleClick = () => {
    navigate(`/shop/${link}`, { replace: true });
  };
  return (
    <LinkBtnContainer
      style={
        active
          ? {
              backgroundColor: `${primaryColor.cursorColor}`,
              color: `${theme.backgroundColor}`,
            }
          : null
      }
      whileTap={{ y: 1 }}
      theme={theme}
      onClick={handleClick}
    >
      {children}
    </LinkBtnContainer>
  );
};

export default LinkBtn;
