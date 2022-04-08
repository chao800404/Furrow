/** @format */

import { SpinnerContainer, SpinnerMotion } from "./spinner.styles";

const Spinner = ({ style }) => {
  return (
    <SpinnerContainer style={style}>
      <SpinnerMotion
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity }}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
