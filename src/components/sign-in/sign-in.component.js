/** @format */

import { useState, useEffect } from "react";
import {
  SignInContainer,
  SignInOutOption,
  SignInOutBtnBg,
} from "./sign-in.styles";
import Button from "../button/button.component";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import FindPasswordCover from "../forgotPasswordCover/fortgotPasswordCover.component";
import { useDispatch } from "react-redux";
import {
  expressSignInStart,
  createAccountStart,
  signWithEmailStart,
} from "../../redux/user/user.actions";

const expressBtnStyle = {
  background: "#fff",
  color: "#161616",
  alignSelf: "center",
  justifySelf: "center",
  width: "100%",
  textAlign: "start",
  fontWeight: "bold",
  height: "5rem",
  borderRadius: ".5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const expressBtnIconStyle = {
  fontSize: "3rem",
  marginRight: "1rem",
  pointerEvents: "none",
};

const SignInUpFrom = ({ animate, initial }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [toggleSignInUp, setToggleSignInUp] = useState(false);
  const [toggleForgotCover, setToggleForotCover] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    toggleForgotCover
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [toggleForgotCover]);

  const handleFormDataUpdate = (e) => {
    const email = e.target.closest("#email");
    email
      ? setUserData({ ...userData, email: e.target.value })
      : setUserData({ ...userData, password: e.target.value });
  };

  const handleTransferSignInOutOption = (e) => {
    const type = e.target.dataset.type;
    if (!type) return;
    if (type === "sign-in")
      setToggleSignInUp((prevToggle) => (prevToggle = false));
    if (type === "sign-up")
      setToggleSignInUp((prevToggle) => (prevToggle = true));
    setUserData({ ...userData, email: "", password: "" });
  };

  const handleSignInWithExpress = async (e) => {
    e.preventDefault();
    const btnType = e.target.dataset.type;
    const { email, password } = userData;
    if (!btnType) return;
    switch (btnType) {
      case "google-sign-in":
        dispatch(expressSignInStart("google"));
        break;
      case "facebook-sign-in":
        dispatch(expressSignInStart("facebook"));
        break;
      case "data-email-password-signInUp":
        toggleSignInUp
          ? dispatch(createAccountStart({ email, password }))
          : dispatch(signWithEmailStart({ email, password }));
        break;
      case "display-forgot-cover":
        setToggleForotCover(!toggleForgotCover);
        break;
      default:
        break;
    }

    setUserData({ email: "", password: "" });
  };

  return (
    <>
      {toggleForgotCover ? (
        <FindPasswordCover seToggleForotCover={setToggleForotCover} />
      ) : null}
      <SignInContainer
        initial={initial}
        animate={animate}
        onClick={handleSignInWithExpress}
      >
        <h4>Express login via Google and Facebook</h4>
        <div className="expressBtn">
          <Button data="google-sign-in" style={expressBtnStyle}>
            GOOGLE
            <FaGooglePlusG style={expressBtnIconStyle} />
          </Button>
          <Button data="facebook-sign-in" style={expressBtnStyle}>
            FACEBOOK
            <FaFacebookF style={expressBtnIconStyle} />
          </Button>
        </div>
        <SignInOutOption onClick={handleTransferSignInOutOption}>
          <span
            data-type="sign-in"
            style={{ color: `${toggleSignInUp ? "#fff" : "#161616"}` }}
            className="signInOutBtn"
          >
            SIGN IN
          </span>
          <span
            data-type="sign-up"
            style={{ color: `${toggleSignInUp ? "#161616" : "#fff"}` }}
            className="signInOutBtn"
          >
            SIGN UP
          </span>
          <SignInOutBtnBg
            animate={{
              x: `${
                toggleSignInUp ? "calc(100% + 1.55rem)" : "calc(0% + 0rem)"
              }`,
            }}
            transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: ".2" }}
          />
        </SignInOutOption>

        <input
          name="email"
          type="email"
          placeholder="Enter User Email"
          id="email"
          require="true"
          value={userData["email"]}
          onChange={handleFormDataUpdate}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter User Password"
          id="password"
          require="true"
          value={userData["password"]}
          onChange={handleFormDataUpdate}
        />
        <Button
          style={{
            gridColumn: "1 / -1",
            backgroundColor: "#000",
            alignSelf: "center",
            height: "100%",
            borderRadius: "0 0 1rem 1rem",
            fontWeight: "bold",
            fontSize: "2rem",
            letterSpacing: ".2rem",
          }}
          data="data-email-password-signInUp"
        >
          SIGN IN
        </Button>
        <p data-type="display-forgot-cover">Forgot Password ?</p>
      </SignInContainer>
    </>
  );
};

export default SignInUpFrom;
