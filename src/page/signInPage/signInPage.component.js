/** @format */
import { Flex } from "../../components/Flex/flex.styles";
import SignInUpFrom from "../../components/sign-in/sign-in.component";
import { SignInUpContainer, SignInUpContent } from "./signInPage.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.select";
import FinishIconAn from "../../components/finishIcon/finishIcon.component";
import signInFinishVideo from "../../assets/video/signInFinishVideo.mp4";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import useTimeOut from "../../utils/useTimeOut";

const variants = {
  initial: {
    scale: 1,
  },
  finish: {
    scale: 1.05,
    y: [100, 20],
  },
};

const SignInPage = () => {
  const existUser = useSelector(selectCurrentUser);
  const [anStart, setAnStart] = useState(false);
  const navigater = useNavigate();

  const transferToHomePage = () => {
    if (!existUser) return;
    navigater("/", { replace: true });
  };

  const anStarts = () => {
    if (existUser) setAnStart(true);
  };

  useTimeOut(anStarts, 1000);
  useTimeOut(transferToHomePage, 12000);

  const goHomePage = (e) => {
    const btn = e.target.closest("[data-type]");
    if (!btn) return;
    if (btn.dataset.type === "replace-Home-page") transferToHomePage();
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "20rem 0",
      }}
    >
      <Flex>
        <SignInUpContainer onClick={goHomePage}>
          {existUser ? null : (
            <SignInUpFrom initial={{ x: -200 }} animate={{ x: 0 }} />
          )}

          <SignInUpContent
            variants={variants}
            animate={existUser ? "finish" : "initial"}
          >
            {existUser ? (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  borderRadius: ".5rem",
                }}
              >
                <motion.div
                  style={{ width: "40%", objectFit: "top", x: "150%" }}
                  animate={{ x: 0 }}
                  transition={{
                    ease: "easeOut",
                    delay: 1,
                  }}
                >
                  <video
                    style={{ width: "100%", filter: "grayscale(50%)" }}
                    loop
                    muted
                    autoPlay={true}
                    src={signInFinishVideo}
                  />
                </motion.div>
                <div
                  style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "5rem",
                    height: "100%",
                  }}
                >
                  <motion.div
                    style={{
                      opacity: "0",
                    }}
                    animate={{
                      opacity: "1",
                    }}
                    transition={{
                      ease: "easeOut",
                      delay: 2,
                    }}
                  >
                    <FinishIconAn width={200} height={200} play={anStart} />
                  </motion.div>
                  <motion.div
                    style={{
                      color: "#161616",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                    animate={{ y: 0, opacity: 1 }}
                    initial={{ y: 0, opacity: 0 }}
                    transition={{
                      ease: "easeOut",
                      delay: 2,
                    }}
                  >
                    Sign in suceesfully
                    <span style={{ fontSize: "1.8rem" }}>
                      Click the button to return to the home page
                    </span>
                    <Button
                      data="replace-Home-page"
                      style={{ marginTop: "2rem" }}
                    >
                      GO HOME PAGE
                    </Button>
                  </motion.div>
                </div>
              </div>
            ) : (
              <>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
              </>
            )}
          </SignInUpContent>
        </SignInUpContainer>
      </Flex>
    </section>
  );
};

export default SignInPage;
