/** @format */

import React from "react";
import { NotFoundContainer, NotFoundContent } from "./404-page.styles";
import { useSelector } from "react-redux";
import { selectThemeStyle } from "../../redux/theme/theme.select";
import FlexLayout from "../../components/Flex/flex.component";
import FeauteVideo from "../../components/home/featureVideo/featureVideo.component";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const theme = useSelector(selectThemeStyle);

  return (
    <NotFoundContainer>
      <FlexLayout>
        <NotFoundContent theme={theme}>
          <motion.h1
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, repeatDelay: 5 }}
          >
            YOU ARE LOAST
          </motion.h1>
          <h2>404</h2>
          <div className="not-fount-vd">
            <FeauteVideo />
          </div>
        </NotFoundContent>
      </FlexLayout>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
