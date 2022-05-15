/** @format */

import { ColorBoxContainer } from "./colorBox.styles";

const ColorBox = ({ style, onClick, color, dataType, active }) => (
  <ColorBoxContainer
    style={style}
    data-type={dataType}
    data-color={color}
    onClick={onClick}
    className={`${active ? "active" : null}`}
  />
);

export default ColorBox;
