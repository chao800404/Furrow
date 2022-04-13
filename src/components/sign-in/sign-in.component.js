/** @format */

import { useState } from "react";
import {
  SignInContainer,
  SignInOutOption,
  SignInOutBtnBg,
} from "./sign-in.styles";
import Button from "../button/button.component";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

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

const SignInUpFrom = ({ animate, initial }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [toggleSignInUp, setToggleSignInUp] = useState(false);

  const handleFormDataUpdate = (e) => {
    const email = e.target.closest("#email");
    email
      ? setUserData({ ...userData, email: e.target.value })
      : setUserData({ ...userData, password: e.target.value });
  };

  const handleSignInOut = (e) => {
    const type = e.target.dataset.type;
    if (!type) return;
    if (type === "sign-in") setToggleSignInUp(false);
    if (type === "sign-up") setToggleSignInUp(true);
  };

  return (
    <SignInContainer initial={initial} animate={animate}>
      <h4>Express login via Google and Facebook</h4>
      <div className="expressBtn">
        <Button style={expressBtnStyle}>
          GOOGLE{" "}
          <FaGooglePlusG style={{ fontSize: "3rem", marginRight: "1rem" }} />
        </Button>
        <Button style={expressBtnStyle}>
          FACEBOOK
          <FaFacebookF style={{ fontSize: "2.2rem", marginRight: "1rem" }} />
        </Button>
      </div>
      <SignInOutOption onClick={handleSignInOut}>
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
            x: `${toggleSignInUp ? "calc(100% + 1.56rem)" : "calc(0% + 0rem)"}`,
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
      >
        SIGN IN
      </Button>
      <p>Forgot Password ?</p>
    </SignInContainer>
  );
};

export default SignInUpFrom;
