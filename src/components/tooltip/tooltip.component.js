/** @format */

import ReactTooltip from "react-tooltip";

const ToolTip = ({ message, id, place, icon = null, fontSize }) => (
  <ReactTooltip id={id} type="dark" place={place}>
    <span style={{ fontSize: fontSize ? fontSize : "1rem" }}>
      {icon && <span style={{ marginRight: "1rem" }}> {icon}</span>}
      {message}
    </span>
  </ReactTooltip>
);

export default ToolTip;
