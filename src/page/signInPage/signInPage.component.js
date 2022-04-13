/** @format */
import { Flex } from "../../components/Flex/flex.styles";
import SignInUpFrom from "../../components/sign-in/sign-in.component";
import { SignInUpContainer, SignInUpContent } from "./signInPage.styles";

const SignInPage = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "20rem 0",
      }}
    >
      <Flex>
        <SignInUpContainer>
          <SignInUpFrom initial={{ x: -200 }} animate={{ x: 0 }} />
          <SignInUpContent>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
          </SignInUpContent>
        </SignInUpContainer>
      </Flex>
    </section>
  );
};

export default SignInPage;
