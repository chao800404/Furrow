/** @format */

import styled from "styled-components";

export const FindPassword = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(0.3rem);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 40rem;
    background-color: #fff;
    color: #161616;
    padding: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
      font-size: 3rem;
      color: #161616;
      margin-bottom: 1rem;
    }

    label {
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
    }

    input {
      width: 100%;
      height: 3rem;
      margin: 3rem 0;
    }
  }
`;
