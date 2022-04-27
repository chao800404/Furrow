/** @format */
import { FindPassword } from "./forgotPasswordCover.styles";
import Button from "../button/button.component";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendChangePasswordEmailStart } from "../../redux/user/user.actions";

const FindPasswordCover = ({ setToggleForotCover }) => {
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useDispatch();
  console.log(setToggleForotCover);

  const handleToggleCover = async (e) => {
    e.preventDefault();
    dispatch(sendChangePasswordEmailStart({ email: userEmail }));
    setToggleForotCover((prevToggle) => (prevToggle = false));
  };
  const handleClick = (e) => {
    const form = e.target.closest("form");
    if (!form) setToggleForotCover((prevToggle) => (prevToggle = false));
  };

  return (
    <FindPassword onClick={handleClick} onSubmit={handleToggleCover}>
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
