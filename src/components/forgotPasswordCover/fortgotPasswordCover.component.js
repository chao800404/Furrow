/** @format */
import { FindPassword } from "./forgotPasswordCover.styles";
import Button from "../button/button.component";
import { sendRestEmail, auth } from "../../firebase/firebase.utils";
import { useState } from "react";

const FindPasswordCover = ({ seToggleForotCover }) => {
  const [userEmail, setUserEmail] = useState("");

  const handleToggleCover = async (e) => {
    e.preventDefault();
    await sendRestEmail({ auth, email: userEmail });
    seToggleForotCover(false);
  };
  const handleClcik = (e) => {
    const form = e.target.closest("form");
    if (!form) seToggleForotCover(false);
  };

  return (
    <FindPassword onClick={handleClcik} onSubmit={handleToggleCover}>
      <form>
        <h3>FORGOT YOUR PASSWORD?</h3>
        <label htmlFor="sendPassworForEmail">
          Please enter your email address below, and we will send you a link to
          reset your password
        </label>
        <input
          type="email"
          name="sendPassworForEmail"
          id="sendPassworForEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Button>SUBMIT</Button>
      </form>
    </FindPassword>
  );
};

export default FindPasswordCover;
