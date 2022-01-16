import React, { useState } from "react";
import styled from "styled-components";
import "./Font.css";
import "./ProjectModal.css";

function ProjectModal({ setProjectModal, setSupportModal }) {
  const [activatePledgeAmount, setActivatePledgeAmount] = useState(false);
  const [activatePledgeAmount2, setActivatePledgeAmount2] = useState(false);
  const [activatePledgeAmount3, setActivatePledgeAmount3] = useState(false);
  const [value, setValue] = useState(0);

  const getToSupportMessage = () => {
    if (value < 1) {
      alert("Amount has to be greater than 0");
    } else {
      setProjectModal(false);
      setSupportModal(true);
    }
  };

  const getToSupportMessage2 = () => {
    if (value < 25) {
      alert("Amount has to be 25 or more");
    } else {
      setProjectModal(false);
      setSupportModal(true);
    }
  };

  const getToSupportMessage3 = () => {
    if (value < 75) {
      alert("Amount has to be 75 or more");
    } else {
      setProjectModal(false);
      setSupportModal(true);
    }
  };

  const theNoPledge = () => {
    if (activatePledgeAmount2 === true) {
      setActivatePledgeAmount2(!activatePledgeAmount2);
    }
    if (activatePledgeAmount3 === true) {
      setActivatePledgeAmount3(!activatePledgeAmount3);
    }
    setActivatePledgeAmount(!activatePledgeAmount);
  };
  const pledge2 = () => {
    if (activatePledgeAmount === true) {
      setActivatePledgeAmount(!activatePledgeAmount);
    }
    if (activatePledgeAmount3 === true) {
      setActivatePledgeAmount3(!activatePledgeAmount3);
    }
    setActivatePledgeAmount2(!activatePledgeAmount2);
  };

  const pledge3 = () => {
    if (activatePledgeAmount === true) {
      setActivatePledgeAmount(!activatePledgeAmount);
    }
    if (activatePledgeAmount2 === true) {
      setActivatePledgeAmount2(!activatePledgeAmount2);
    }
    setActivatePledgeAmount3(!activatePledgeAmount3);
  };

  return (
    <PledgeContainer>
      <PledgeHeading>
        <div>
          <h1>Back this project</h1>
          <img
            src="/images/icon-close-modal.svg"
            alt=""
            onClick={() => setProjectModal(false)}
          />
        </div>
        <span>
          Want to support us in bringing Mastercraft Bamboo Monitor Rise out in
          the world?
        </span>
        <NoPledge className={`${activatePledgeAmount ? "div" : "div2"}`}>
          <div>
            <div className="hover2" onClick={() => theNoPledge()}>
              <button
                className={`${activatePledgeAmount ? "toggle" : "notToggle"}`}
              ></button>
            </div>
            <p className="hover" onClick={() => theNoPledge()}>
              Pledge with no reward
            </p>
          </div>
          <span>
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </span>
        </NoPledge>
        {activatePledgeAmount && (
          <PledgeAmount className="styleamount amount">
            <span>Enter your pledge</span>
            <div>
              <div>
                <span>$</span>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <button onClick={getToSupportMessage}>Continue</button>
            </div>
          </PledgeAmount>
        )}

        <BambooStand className={`${activatePledgeAmount2 ? "div" : "div2"}`}>
          <div>
            <div className="hover2" onClick={() => pledge2()}>
              <button
                className={`${activatePledgeAmount2 ? "toggle" : "notToggle"}`}
              ></button>
            </div>
            <p className="hover" onClick={() => pledge2()}>
              Bamboo Stand <br />
              <span>Pledge $25 or more</span>
            </p>
          </div>
          <span>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </span>
          <p>
            101 <span>left</span>
          </p>
        </BambooStand>
        {activatePledgeAmount2 && (
          <PledgeAmount className="styleamount amount">
            <span>Enter your pledge</span>
            <div>
              <div>
                <span>$</span>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>

              <button onClick={getToSupportMessage2}>Continue</button>
            </div>
          </PledgeAmount>
        )}
        <Pledge className={`${activatePledgeAmount3 ? "div" : "div2"}`}>
          <div>
            <div
              className="hover2"
              onClick={() => pledge3()}
            >
              <button
                className={`${activatePledgeAmount3 ? "toggle" : "notToggle"}`}
              ></button>
            </div>
            <p className="hover" onClick={() => pledge3()}>
              Black Edition Stand <br />
              <span id="move-span">Pledge $75 or more</span>
            </p>
          </div>
          <span>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </span>
          <p>
            64 <span>left</span>
          </p>
        </Pledge>
        {activatePledgeAmount3 && (
          <PledgeAmount className="styleamount amount">
            <span>Enter your pledge</span>
            <div>
              <div>
                <span>$</span>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>

              <button onClick={getToSupportMessage3}>Continue</button>
            </div>
          </PledgeAmount>
        )}
        <Mahogany>
          <div>
            <div></div>
            <p>
              Mahogany Special Edition <br />
              <span id="move-span2">Pledge $200 or more</span>
            </p>
          </div>
          <span>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </span>
          <p>
            0 <span>left</span>
          </p>
        </Mahogany>
      </PledgeHeading>
    </PledgeContainer>
  );
}

const PledgeContainer = styled.div`
  @media (min-width: 768px) {
    position: fixed;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    z-index: 999;
    place-items: center;
    overflow-y: scroll;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    z-index: 999;
    place-items: center;
    overflow-y: scroll;
  }
`;

const PledgeHeading = styled.div`
  @media (min-width: 768px) {
    margin-top: 6rem;
    max-width: 820px;
    height: auto;
    margin-right: 1rem;
    margin-left: 1rem;
    background: white;
    border-radius: 0.8rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1.7rem;
    padding-bottom: 1.8rem;
    div:first-child {
      h1 {
        font-size: 15px;
        text-transform: none;
        color: black;
        font-weight: 800;
        letter-spacing: none;
      }
      img {
        padding-top: 0.3rem;
        width: 2%;
        height: 2%;
        cursor: pointer;
      }
      display: flex;
      justify-content: space-between;
      padding-bottom: 1rem;
    }
    span {
      font-size: 15px;
      color: black;
      opacity: 0.5;
      font-weight: 600;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 6rem;
    max-width: 340px;
    height: auto;
    margin-right: 1rem;
    margin-left: 1rem;
    background: white;
    border-radius: 0.8rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1.7rem;
    padding-bottom: 1.8rem;
    div:first-child {
      h1 {
        font-size: 15px;
        text-transform: none;
        color: black;
        font-weight: 800;
        letter-spacing: none;
      }
      img {
        padding-top: 0.3rem;
        width: 5%;
        height: 5%;
        cursor: pointer;
      }
      display: flex;
      justify-content: space-between;
      padding-bottom: 1rem;
    }
    span {
      font-size: 15px;
      color: black;
      opacity: 0.5;
      font-weight: 600;
      line-height: 1.5rem;
    }
  }
`;

const NoPledge = styled.div`
  @media (min-width: 768px) {
    width: 710px;
    height: 160px;
    background: white;
    margin-top: 1.5rem;
    box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
    padding-left: 1.7rem;
    padding-top: 1.8rem;
    padding-right: 2.5rem;
    div:first-child {
      padding-bottom: 0.5rem;
      height: 50px;
    }

    div:first-child div {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      box-shadow: 0.2px 0.2px 0.2px 2px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }

    p {
      margin-left: 2rem;
      width: 100%;
      font-size: 15px;
      text-transform: none;
      color: black;
      font-weight: 700;
      letter-spacing: none;
    }
    span {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    width: 290px;
    height: 240px;
    background: white;
    margin-top: 1.5rem;
    box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
    padding-left: 1.7rem;
    padding-top: 1.8rem;
    padding-right: 2.5rem;
    div:first-child {
      padding-bottom: 0.5rem;
    }

    div:first-child div {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      box-shadow: 0.2px 0.2px 0.2px 2px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }

    p {
      margin-left: 2rem;
      width: 100%;
      font-size: 15px;
      text-transform: none;
      color: black;
      font-weight: 700;
      letter-spacing: none;
    }
    span {
      font-size: 15px;
    }
  }
`;

const Pledge = styled(NoPledge)`
  @media (min-width: 768px) {
    height: 160px;
    div:first-child div {
      margin-top: 0.8rem;
    }
    p:nth-child(3) {
      display: flex;
      justify-content: flex-end;
      margin-left: 40rem;
      font-size: 18px;
      transform: translateY(-90px);
      width: 0;
    }
    p {
      transform: translateY(10px);
    }
    span:last-child {
      padding-left: 0.5rem;
    }
    span:nth-child(2) {
    }
    div span {
      display: flex;
      margin-left: 7rem;
      padding-bottom: 1rem;
      color: hsl(176, 50%, 47%);
      opacity: 1;
      transform: translateY(-23px);
    }
  }
  @media (max-width: 768px) {
    height: 300px;
    div:first-child div {
      margin-top: 0.8rem;
    }
    p:nth-child(3) {
      margin-top: 1.2rem;
      margin-left: 0;
      font-size: 18px;
    }
    div span {
      color: hsl(176, 50%, 47%);
      opacity: 1;
    }
  }
`;

const PledgeAmount = styled.section`
  @media (min-width: 768px) {
    width: 710px;
    height: 100px;
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
    button {
      margin-right: 0.8rem;
      cursor: pointer;
    }
    input {
      margin-right: 1.5rem;
      box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
      padding-left: 2rem;
      border: solid rgba(0, 0, 0, 0.1);
    }
    button,
    input {
      width: 95px;
      height: 40px;
      border-radius: 1.5rem;
      font-weight: 700;
    }
    input:focus {
      outline: none !important;
      border: solid hsl(176, 50%, 47%);
    }
    button {
      background: hsl(176, 50%, 47%);
      color: white;
      border: none;
      &:hover {
        background: hsl(176, 72%, 28%);
      }
    }
    div span {
      position: absolute;
      padding-top: 0.45rem;
      padding-left: 1rem;
    }
    & > span {
      padding-bottom: 1rem;
      padding-left: 1rem;
    }
    div {
      display: flex;
      flex-direction: flex-start;
    }
  }
  @media (max-width: 768px) {
    width: 290px;
    height: 140px;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 6rem;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
    button {
      margin-right: 0.8rem;
      cursor: pointer;
    }
    input {
      margin-right: 1.5rem;
      box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
      padding-left: 2rem;
      border: solid rgba(0, 0, 0, 0.1);
    }
    button,
    input {
      width: 95px;
      height: 40px;
      border-radius: 1.5rem;
      font-weight: 700;
    }
    input:focus {
      outline: none !important;
      border: solid hsl(176, 50%, 47%);
    }
    button {
      background: hsl(176, 50%, 47%);
      color: white;
      border: none;
      &:hover {
        background: hsl(176, 72%, 28%);
      }
    }
    div span {
      position: absolute;
      padding-top: 0.45rem;
      padding-left: 1rem;
    }
    & > span {
      padding-bottom: 1rem;
    }
    div {
      display: flex;
      flex-direction: flex-start;
    }
  }
`;

const BambooStand = styled(Pledge)`
  @media (min-width: 768px) {
    height: 160px;
  }

  @media (max-width: 768px) {
    height: 320px;
  }
`;

const Mahogany = styled(BambooStand)`
  opacity: 0.5;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
`;

export default ProjectModal;
