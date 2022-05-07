/** @format */

import { BannerSpinnerContainer } from "./bannerSpinner.styles";
import { useSelector } from "react-redux";
import { selectThemeStyle } from "../../redux/theme/theme.select";

const BannerSpinner = () => {
  const theme = useSelector(selectThemeStyle);
  return <BannerSpinnerContainer theme={theme} />;
};

export default BannerSpinner;
