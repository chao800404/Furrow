/** @format */

import { SpinnerContainer, SpinnerMotion } from "./spinner.styles";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerMotion
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity }}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
