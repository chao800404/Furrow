/** @format */

import { SignInOut } from "./signInOut.styles.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.select";
import { signOutStart } from "../../redux/user/user.actions";
import maxWidth from "../../config/screen.size";
import useWinowSize from "../../utils/useWindowSize";

const SignInOutButton = ({ theme }) => {
  const navigate = useNavigate();
  const existUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const handleTransferSignIn = () => {
    existUser
      ? dispatch(signOutStart())
      : navigate("/signin", { repalce: true });
  };
  const { width } = useWinowSize();
  const isMobile = width <= maxWidth.small.replace("px", "");

  return (
    <SignInOut
      onClick={handleTransferSignIn}
      whileTap={{ y: ".2rem" }}
      theme={theme}
    >
      {existUser ? (
        <>
          {existUser.photoURL && (
            <img
              alt={existUser.displayName}
              src={existUser.photoURL}
              referrerPolicy="no-referrer"
            />
          )}
          <span>
            {existUser.displayName} {!isMobile && "/ SIGNOUT"}
          </span>
        </>
      ) : (
        <span>SIGN IN</span>
      )}
    </SignInOut>
  );
};

export default SignInOutButton;
