/** @format */

import { SignInOut } from "./signInOut.styles.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.select";
import { signOutStart } from "../../redux/user/user.actions";

const SignInOutButton = ({ theme }) => {
  const navigate = useNavigate();
  const existUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const handleTransferSignIn = () => {
    existUser
      ? dispatch(signOutStart())
      : navigate("/signin", { repalce: true });
  };

  return (
    <SignInOut
      onClick={handleTransferSignIn}
      whileTap={{ y: ".2rem" }}
      theme={theme}
    >
      {existUser ? (
        <>
          {existUser.photoURL ? (
            <img
              alt={existUser.displayName}
              src={existUser.photoURL}
              referrerPolicy="no-referrer"
            />
          ) : null}

          <span>{existUser.displayName} / SIGNOUT</span>
        </>
      ) : (
        <span>SIGN IN</span>
      )}
    </SignInOut>
  );
};

export default SignInOutButton;
