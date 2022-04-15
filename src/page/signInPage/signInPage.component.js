/** @format */
import { Flex } from "../../components/Flex/flex.styles";
import SignInUpFrom from "../../components/sign-in/sign-in.component";
import { SignInUpContainer, SignInUpContent } from "./signInPage.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.select";
import FinishIconAn from "../../components/finishIcon/finishIcon.component";

const SignInPage = () => {
  const existUser = useSelector(selectCurrentUser);

  const variants = {
    initial: {
      scale: 1,
    },
    finish: {
      scale: 1.05,
    },
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "20rem 0",
      }}
    >
      <Flex>
        <SignInUpContainer>
          {existUser ? null : (
            <SignInUpFrom initial={{ x: -200 }} animate={{ x: 0 }} />
          )}

          <SignInUpContent
            variants={variants}
            animate={existUser ? "finish" : "initial"}
          >
            {existUser ? (
              <FinishIconAn
                width={200}
                height={200}
                isStopped={false}
                isPaused={false}
              />
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
