import React from "react";
import styled from "styled-components";
import "./Font.css";

function Thankyou({ setSupportModal, setProjectModal }) {
  const finishCrowdFund = () => {
    setSupportModal(false);
    setProjectModal(false);
  };
  return (
    <ThankYouContainer>
      <MessageBox>
        <img src="/images/icon-check.svg" alt="" />
        <h1>Thanks for your support!</h1>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button onClick={finishCrowdFund}>Got it!</button>
      </MessageBox>
    </ThankYouContainer>
  );
}

const ThankYouContainer = styled.div`
  position: fixed;
  top: 0rem;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  z-index: 999;
  place-items: center;
`;

const MessageBox = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  width: 500px;
  height: 430px;
  background: white;
  margin-bottom: 9rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 20%;
    height: 20%;
    margin-top: 2.1rem;
  }
  h1 {
    margin-top: 1.5rem;
    font-size: 18px;
    text-transform: none;
    font-weight: 700;
    color: black;
    letter-spacing: none;
    word-spacing: none;
  }
  p {
    font-size: 15px;
    text-align: center;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    color: black;
    opacity: 0.5;
    margin-top: 1rem;
  }
  button {
    width: 120px;
    height: 56px;
    border: none;
    margin-top: 0.5rem;
    background: hsl(176, 50%, 47%);
    border-radius: 1.8rem;
    color: white;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background: hsl(176, 72%, 28%);
    }
  }
`;

export default Thankyou;
