/** @format */

import { SpinnerContainer, SpinnerMotion } from "./spinner.styles";

const Spinner = ({ style, width, height }) => {
  return (
    <SpinnerContainer style={style}>
      <SpinnerMotion
        width={width}
        height={height}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity }}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
