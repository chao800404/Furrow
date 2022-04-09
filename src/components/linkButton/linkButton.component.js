/** @format */

import { useNavigate } from "react-router-dom";
import { LinkBtnContainer } from "./linkButton.styles";
import { useSelector } from "react-redux";
import { selectThemeStyle } from "../../redux/theme/theme.select";

const LinkBtn = ({ children, link }) => {
  const navigate = useNavigate();
  const theme = useSelector(selectThemeStyle);
  const handleClick = () => {
    navigate(`/shop/${link.toUpperCase()}`, { replace: true });
  };
  return (
    <LinkBtnContainer whileTap={{ y: 1 }} theme={theme} onClick={handleClick}>
      {children}
    </LinkBtnContainer>
  );
};

export default LinkBtn;
