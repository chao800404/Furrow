/** @format */

import ReactTooltip from "react-tooltip";
import useCheckScreenIsMobile from "../../utils/useCheckScreen";

const ToolTip = ({ message, id, place, icon = null, fontSize, children }) => {
  const isMobile = useCheckScreenIsMobile();
  return (
    !isMobile && (
      <ReactTooltip id={id} type="dark" place={place}>
        <span
          style={{
            fontSize: fontSize ? fontSize : "1rem",
            color: "#fff",
            marginTop: 0,
            fontWeight: "unset",
          }}
        >
          {icon && <span style={{ marginRight: "1rem" }}> {icon}</span>}
          {message}
          {children}
        </span>
      </ReactTooltip>
    )
  );
};

export default ToolTip;
